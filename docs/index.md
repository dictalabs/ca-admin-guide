# CA Admin Guide

## Overview

The **Certificate Authority (CA)** platform is a multi-tenant system for operating a private
Public Key Infrastructure (PKI). This guide is organized as a **configuration workflow** — follow
the steps in order to go from an empty system to issuing certificates.

The platform has **two portals**:

| Portal | Audience | URL pattern |
| ------ | -------- | ----------- |
| **Tenant Super Admin** | Platform operators who provision tenants | `https://admin.<domain>` |
| **Tenant portal** | PKI operators within one tenant | `https://<subdomain>.<domain>` |

> **Screenshots are illustrative.** Names shown (e.g. *Root CA 01*, *Sub CA 01*,
> *CA Administrator*, *example.com*) reflect a sample environment and will differ in yours.

## Configuration Workflow

**Platform Setup (Super Admin)**

- [Sign in to the Super Admin Portal & Multi-Tenancy](01_super_admin_overview.md)
- [Verify License & Modules](02_license.md)
- [Create a Tenant](03_create_tenant.md)
- [Manage Super Admins](04_super_admins.md)

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
