# Introduction

**Dictalabs CA** is a Certificate Authority platform for operating an enterprise or a private **Public Key
Infrastructure (PKI)** — issuing, validating, and managing the full lifecycle of digital
certificates from your own trusted roots. It runs on your infrastructure, is controlled entirely
from a web console, and scales from a single team to many isolated customer workspaces.

> **New here?** Read this page to understand what the platform does and how it is structured, then
> go to [Install the Platform](install.md), and follow the
> [Platform Setup → Overview & Workflow](platform_setup.md) roadmap to go from an empty system to
> issuing certificates.

## What it does

Dictalabs CA lets a PKI operator:

- Stand up a **CA hierarchy** — self-signed Root CAs and subordinate (intermediate) Sub CAs.
- Issue and manage **end-entity certificates** for TLS/server auth, client auth, code signing,
  and email — from a request wizard or CSR upload.
- Publish **revocation** information via **CRLs** and an **OCSP** responder (Validation Authority).
- Enforce issuance policy with **certificate templates** and **certificate profiles** (subject/SAN
  rules, key constraints, extensions, EKUs, approval modes).
- Protect signing keys in **software** key stores or **HSM / PKCS#11** crypto sources via
  connectors.
- Govern operations with **role-based access control**, **operators**, **approval workflows**,
  **notifications**, **API keys**, and tamper-evident **logs** (optional log signing).

## Key features

| Area | Capabilities |
| ---- | ------------ |
| **CA hierarchy** | Root and Sub CAs, key ceremonies, CA configuration (keys, directives, CRL, distribution/AIA), revocation. |
| **Issuance** | Certificate profiles & templates, request/CSR wizard, subject & SAN constraints, EKUs, approval modes. |
| **Validation** | OCSP responder / Validation Authority, CRL generation & publishing, delta CRLs, distribution points. |
| **Cryptography** | Software key stores and **HSM / PKCS#11** crypto sources; classical (RSA, ECDSA) and **post-quantum** algorithms (**ML-DSA**, **ML-KEM**). |
| **Access control** | Roles & granular permissions, operators, **MFA**, approval (dual-control) workflows. |
| **Operations** | Dashboard, notifications (SMTP), API keys, audit/access logs, log rotation & signing, SIEM/Syslog export. |
| **Multi-tenancy** | Optional isolated tenant workspaces on one deployment (see [Multi-Tenancy & Tenants](multi_tenancy.md)). |

## High-level architecture

Dictalabs CA is a set of containerized services fronted by a web console. Two portals sit on top:

| Portal | Audience | URL pattern |
| ------ | -------- | ----------- |
| **Tenant Super Admin** | Platform operators who provision and govern tenants | `https://admin.<domain>` |
| **Tenant portal** | PKI operators working within one tenant | `https://<subdomain>.<domain>` |

The backend services (see [Install the Platform](install.md) for details and ports):

- **CA API** — the core FastAPI service that issues and manages CAs, certificates, profiles, and
  templates.
- **OCSP responder** — the Validation Authority service that answers OCSP status requests.
- **Background worker & scheduler** — generate/publish CRLs and run OCSP sync on a schedule.
- **PostgreSQL** — system of record; **Redis** — task broker/cache.
- **Web application** (frontend) — the admin console, deployed separately and pointed at the CA API.

Signing keys live in **crypto sources** — a software key store or an external **HSM / PKCS#11**
device reached through a **connector**. Revocation is served two ways: **CRL** files published to a
distribution point, and live **OCSP** responses from the Validation Authority.

> **Screenshots are illustrative.** Names shown throughout this guide (e.g. *Root CA 01*,
> *Sub CA 01*, *CA Administrator*, *example.com*) reflect a sample environment and will differ in
> yours.

## Where to go next

1. [Install the Platform](install.md) — deploy the services on your server.
2. [Platform Setup → Overview & Workflow](platform_setup.md) — the ordered configuration roadmap.
3. New to the terms used here? See the [Glossary & Abbreviations](glossary.md).
