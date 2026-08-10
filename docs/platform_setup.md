# Platform Setup — Overview & Workflow

> **Prerequisite:** the platform is [installed](install.md) and reachable.

This is the ordered **configuration workflow** — follow the steps top to bottom to go from a
freshly installed system to issuing certificates. Each linked page lists its own **Prerequisites**.

## Single tenant vs. multi-tenant

Most deployments run a **single (default) tenant** — you sign in and configure the PKI directly.
The **multi-tenant** capability (many isolated workspaces on one deployment) is **optional** and
license-gated; if you don't need it, skip it. All tenancy-specific content lives in its own section:
[Multi-Tenancy & Tenants](multi_tenancy.md).

## Configuration workflow

**Platform Setup (Super Admin)**

- [Sign in to the Super Admin Portal](01_super_admin_overview.md)
- [Verify License & Modules](02_license.md)
- [Manage Super Admins](04_super_admins.md)

> Running multiple tenants? Before signing in to a tenant, provision it — see
> [Multi-Tenancy & Tenants → Create a Tenant](03_create_tenant.md).

**Access the Tenant**

- [Sign in to the Tenant](05_tenant_sign_in.md)
- [Dashboard Overview](06_dashboard.md)

**Access Control**

- [Roles & Permissions](07_roles.md)
- [Operators](08_operators.md)

**Cryptographic Foundation**

- [Create Connectors](09_connectors.md)
- [Configure Crypto Sources](10_crypto_sources.md)

**Certificate Templates**

- [Create Templates](11_templates.md)

**Build the CA Hierarchy**

- [Create the Root CA](12_create_root_ca.md)
- [Create the Sub CA](13_create_sub_ca.md)
- [Configure the CA (CRL, OCSP/AIA)](14_configure_ca.md)

**Validation**

- [Configure a Validation Authority (OCSP)](15_validation_authority.md)

**Issuance**

- [Create Certificate Profiles](16_certificate_profiles.md)
- [Request & Issue a Certificate](17_request_certificate.md)
- [Manage Certificates](18_certificates.md)

**Operations & Governance**

- [Approvals](19_approvals.md)
- [Notifications](20_notifications.md)
- [API Keys](21_api_keys.md)
- [Logs](22_logs.md)

**System Settings & Profile**

- [General Settings](23_settings_general.md)
- [Log Rotation & Signing](24_settings_log_rotation.md)
- [Branding](25_settings_branding.md)
- [User Profile & MFA](26_user_profile.md)

## Dependency at a glance

Connectors → Crypto Sources → Templates → Root CA → Sub CA → Validation Authority → Profiles →
Request/Issue → Manage. Each step's page lists its **Prerequisites**.

!!! note "New to the terminology?"
    Acronyms such as CA, VA, OCSP, CRL, CSR, HSM, PKI, and AIA are defined in the
    [Glossary & Abbreviations](glossary.md).
