# Install the Platform

This guide walks through installing **Dictalabs CA** on an in-house server. The backend services and
frontend run as Docker containers orchestrated by Docker Compose.

**What installation covers:** provisioning a host that meets the minimum requirements, installing
Docker, setting up DNS, NGINX and TLS, configuring the backend environment and license, starting the
services, and pointing the web console at the API. When you finish, sign in and continue with
[Platform Setup → Overview & Workflow](platform_setup.md).

**Before you begin:** a server you control (see requirements below), a domain you can create DNS
records for, and a **license file from Dictalabs** (see step 7). For a refresher on what the platform
is and how it's structured, see [Introduction](index.md).

---

## **1. Minimum Requirements**

| Resource              | Specification          |
| --------------------- | ---------------------- |
| **Operating System**  | Ubuntu 24.04 LTS       |
| **CPU**               | 4–8 cores              |
| **Memory (RAM)**      | 8–16 GB                |
| **Disk Space**        | 50 GB+                 |
| **Required Software** | Docker, Docker Compose, NGINX |

---

## **2. Architecture Overview**

The CA platform is composed of the following containers (see `docker-compose.yml`):

- **ca** – The FastAPI CA API service (host port `28000` → container `8000`). Issues and manages certificates, CAs, profiles, and templates.
- **ocsp** – The OCSP responder / Validation Authority service (host port `28001`), run in `OCSP_ONLY` mode.
- **celery_worker** – Background worker for CRL generation and OCSP sync tasks.
- **celery_beat** – Scheduler for periodic tasks (CRL publishing, OCSP sync).
- **postgres** – PostgreSQL 16 database (internal only by default).
- **redis** – Redis 7 broker/result backend for Celery (internal only by default).

The **web application** (frontend) is deployed separately and points at the CA API via its `config.json`.

---

## **3. Docker Installation**

Install Docker Engine and the Compose plugin:

```bash
# Add Docker's official GPG key
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install Docker Engine and Compose
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# Allow Docker without sudo
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

---

## **4. DNS Configuration**

Create DNS entries for your CA environment (replace `YOURDOMAIN.com`):

```
ca.YOURDOMAIN.com        # Web application (frontend)
api.ca.YOURDOMAIN.com    # CA API backend
ocsp.ca.YOURDOMAIN.com   # OCSP responder
crl.ca.YOURDOMAIN.com    # CRL distribution
```

---

## **5. NGINX & TLS**

Install NGINX as a reverse proxy and obtain TLS certificates (e.g. Let's Encrypt via Certbot):

```bash
sudo apt install nginx -y
sudo apt install certbot python3-certbot-nginx -y
sudo certbot certonly --standalone -d ca.YOURDOMAIN.com -d api.ca.YOURDOMAIN.com -d ocsp.ca.YOURDOMAIN.com -d crl.ca.YOURDOMAIN.com
```

Configure NGINX server blocks to proxy:

- `api.ca.YOURDOMAIN.com` → `http://127.0.0.1:28000`
- `ocsp.ca.YOURDOMAIN.com` → `http://127.0.0.1:28001`
- `ca.YOURDOMAIN.com` → the frontend container (port `8080`)

---

## **6. Backend Configuration (.env)**

Copy the environment template and populate it. **Never commit `.env`.**

```bash
cd dlabs-ca
cp .env.example .env
```

Set the required values:

- **Application:** `APP_NAME`, `APP_ENV` (`prod` for production), `DEBUG=false`.
- **Security (required):**
    - `JWT_SECRET_KEY` — generate: `python -c "import secrets;print(secrets.token_urlsafe(48))"`
    - `KEY_PASSWORD_FERNET_KEY` — generate: `python -c "from cryptography.fernet import Fernet;print(Fernet.generate_key().decode())"`
- **Database:** `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` (use unique non-default credentials).
- **Network:** `CORS_ALLOW_ORIGINS` (e.g. `https://ca.YOURDOMAIN.com`) and `ALLOWED_HOSTS`. Wildcards are forbidden in production.
- **CRL / OCSP:** `CRL_PUBLISH_BASE_URL` (e.g. `https://crl.ca.YOURDOMAIN.com`) and `OCSP_BASE_URL` (e.g. `https://ocsp.ca.YOURDOMAIN.com/api/ocsp`).
- **Logging:** `LOG_TO_FILE`, `LOG_FILE_PATH`, rotation settings, and optional `LOG_SIGNING_*`.

> In production the configuration enforces: `DEBUG=false`, no wildcard CORS/hosts, and `OCSP_SYNC_VERIFY_TLS=true`.

---

## **7. Licensing**

A license file issued by Dictalabs is required for the CA API service. Generate the system UUID and share it to obtain your license:

```bash
sudo ./scripts/get-system-uuid.sh   # if provided with your package
```

Place the license file in the `license/` directory (mounted into the containers as `ca_license`).

---

## **8. Start the Backend**

From the `dlabs-ca` directory:

```bash
docker compose pull   # if using prebuilt images
docker compose up -d
```

Database migrations (Alembic) run on startup. Verify the containers:

```bash
docker ps -a
```

View logs for a service (stop with **Ctrl+C**):

```bash
docker logs -f dlabs-ca
docker logs -f ca_ocsp
docker logs -f ca_celery_worker
docker logs -f ca_celery_beat
```

---

## **9. Frontend (Web Application) Configuration**

Deploy the CA web application package and point it at the backend API. Edit `config.json`:

```json
{
  "API_BASE_URL": "https://api.ca.YOURDOMAIN.com/api/v1",
  "PUBLIC_API_BASE_URL": "https://api.ca.YOURDOMAIN.com"
}
```

Start the frontend container:

```bash
docker compose up -d
```

---

## **10. Verification**

After deployment:

- Access the **CA web app** at `https://ca.YOURDOMAIN.com` and sign in (see
  [Platform Setup → Overview & Workflow](platform_setup.md)).
- Confirm the API health endpoint responds at `https://api.ca.YOURDOMAIN.com/health`.
- Confirm the OCSP service responds at `https://ocsp.ca.YOURDOMAIN.com`.

Once signed in, proceed to create your first [Certificate Authority](12_create_root_ca.md).
