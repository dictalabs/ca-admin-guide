# Module & Feature Inventory

## Module Inventory

| Module | Portal | Purpose | Page |
| ------ | ------ | ------- | ---- |
| Tenant Management | Super Admin | Provision/govern tenants, quotas, lifecycle | [link](03_create_tenant.md) |
| Super Admins | Super Admin | Manage platform-wide admin accounts | [link](04_super_admins.md) |
| License Management | Super Admin | License, modules, capabilities, usage | [link](02_license.md) |
| Dashboard | Tenant | Metrics, alerts, health | [link](06_dashboard.md) |
| Certificates | Tenant | Issued certificate inventory + revoke | [link](18_certificates.md) |
| Certificate Requests | Tenant | Request list + issuance wizard | [list](17_request_certificate.md) / [create](17_request_certificate.md) |
| Certificate Authorities | Tenant | Root/Intermediate/External CA config | [link](12_create_root_ca.md) |
| Validation Authorities | Tenant | OCSP responders, external CAs, sync | [link](15_validation_authority.md) |
| Certificate Profiles | Tenant | Issuance policy profiles | [link](16_certificate_profiles.md) |
| Crypto Sources | Tenant | HSM/PKCS#11/software key stores | [link](10_crypto_sources.md) |
| Connectors | Tenant | SIEM/SMTP/SYSLOG/Crypto Engine integrations | [link](09_connectors.md) |
| Notifications | Tenant | Alert schedules | [link](20_notifications.md) |
| API Keys | Tenant | Scoped programmatic access | [link](21_api_keys.md) |
| Approvals | Tenant | Dual-control approval queue | [link](19_approvals.md) |
| Templates | Tenant | Certificate blueprints | [link](11_templates.md) |
| Operators & Roles | Tenant | RBAC: users, roles, permissions | [link](08_operators.md) |
| Logs | Tenant | Immutable audit trail | [link](22_logs.md) |
| Settings | Tenant | General, Log Rotation, Branding | [general](23_settings_general.md) |
| User Profile | Tenant | Account, MFA, effective permissions | [link](26_user_profile.md) |

## Feature Inventory

| Feature | Where | Notes |
| ------- | ----- | ----- |
| Multi-tenancy (schema-per-tenant) | Super Admin | Subdomain routing; soft/hard delete |
| Per-tenant quotas & request rate limit | Tenant Detail | Blank quota = Unlimited |
| License modules (CA, VA) + capabilities | License | Gates tenant features |
| Per-tenant branding | Branding / Login | Logo, name, theme |
| CA hierarchy (Root/Intermediate/External) | Certificate Authorities | Key ceremony, CRL, distribution |
| OCSP responders + CA→VA sync + DLQ | Validation Authorities | Resync, batch push, replay |
| Templates with 6 config dimensions | Templates | Extensions, subject/SAN constraints |
| Profiles (template + CA + approval) | Profiles | Drive request wizard |
| Certificate request wizard | Request Certificate | Upload CSR or generate key+CSR |
| Revocation | Certificates | Reason; CRL/OCSP update |
| Approval workflow | Roles + Approvals | Role "Requires Approval" → pending |
| RBAC (~52 fine-grained permissions) | Operators & Roles, API Keys | Grouped by resource |
| Operator auth: Password, SSO, Mutual TLS | Create/Edit Operator | Per-operator toggles |
| MFA (TOTP) + Client-cert auth | Profile | Per-user security |
| API keys: scopes, rate limit, IP allowlist, expiry, rotate | API Keys | Secret shown once |
| Connectors: SIEM/SMTP/SYSLOG/Crypto Engine | Connectors | Monitoring, Logs, DLQ tabs |
| Log rotation, log signing, cloud archival | Log Rotation | Signing via crypto source |
| Audit trail (immutable) + log detail | Logs | Pass/Fail, payload, trace |
| SIEM export + DLQ replay | Connectors / VA / API perms | `siem:read`, `siem.manage` |

## Permission catalog

See the full assignable permission list in [API Keys](21_api_keys.md#permission-catalog)
— the same catalog backs [role definitions](08_operators.md).
