# Configure the CA (Keys, CRL, Distribution)

> **Build the CA Hierarchy.** **Prerequisite:** a [Root CA](12_create_root_ca.md) and/or
> [Sub CA](13_create_sub_ca.md) exists.

## Purpose

Once a CA exists, configure how it manages keys, publishes revocation (CRL), and advertises
validation/issuer endpoints (OCSP / AIA). Select a CA in the list to expose its configuration
tabs.

## Navigation

`Certificate Authorities` → select a CA → tabs.

## Configuration tabs

### Key Configuration
Key pair details — Key Name, Crypto Source, Key Algorithm — and key operations.

![CA – Key Configuration](images/14_ca_key_configuration.png)

### Certificate Data
The CA certificate's subject DN and content.

![CA – Certificate Data](images/14_ca_certificate_data.png)

### Directives
CA policy directives.

![CA – Directives](images/14_ca_directives.png)

### CRL Settings
Certificate Revocation List configuration (publication cadence, distribution point).

![CA – CRL Settings](images/14_ca_crl_settings.png)

### Distribution
OCSP responder URL, OCSP service default URI, CA Issuer default URI, **Publish AIA**, and
**Allow CA certificate for OCSP signing**.

![CA – Distribution](images/14_ca_distribution.png)

## Actions

- Per-tab **Save** — persist configuration.
- **Download Certificate** — export the CA certificate.
- **Revoke CA** — revoke the CA (invalidates everything it issued; irreversible).

## Step-by-Step

1. Open **Certificate Authorities** and select the CA.
2. Review **Key Configuration** (confirm the crypto source/key).
3. Configure **CRL Settings** (publication) and **Distribution** (OCSP/AIA URLs, Publish AIA).
4. **Save** each tab.

!!! note "Important Notes"
    - OCSP responses are served by a [Validation Authority](15_validation_authority.md).

!!! warning "Critical Warning"
    Revoking a CA cascades to all certificates that CA issued — use with extreme care.
