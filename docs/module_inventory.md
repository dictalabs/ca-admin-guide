# Module & Feature Inventory

## Module Inventory

| Module | Portal | Purpose | Page |
| ------ | ------ | ------- | ---- |
| Tenant Management | Super Admin | Provision/govern tenants, quotas, lifecycle | [link](super_admin_tenants.md) |
| Super Admins | Super Admin | Manage platform-wide admin accounts | [link](super_admin_administrators.md) |
| License Management | Super Admin | License, modules, capabilities, usage | [link](super_admin_license.md) |
| Dashboard | Tenant | Metrics, alerts, health | [link](dashboard.md) |
| Certificates | Tenant | Issued certificate inventory + revoke | [link](certificates.md) |
| Certificate Requests | Tenant | Request list + issuance wizard | [list](certificate_request_list.md) / [create](certificate_request_create.md) |
| Certificate Authorities | Tenant | Root/Intermediate/External CA config | [link](certificate_authorities.md) |
| Validation Authorities | Tenant | OCSP responders, external CAs, sync | [link](validation_authorities.md) |
| Certificate Profiles | Tenant | Issuance policy profiles | [link](certificate_profiles.md) |
| Crypto Sources | Tenant | HSM/PKCS#11/software key stores | [link](crypto_sources.md) |
| Connectors | Tenant | SIEM/SMTP/SYSLOG/Crypto Engine integrations | [link](connectors.md) |
| Notifications | Tenant | Alert schedules | [link](notifications.md) |
| API Keys | Tenant | Scoped programmatic access | [link](key_management.md) |
| Approvals | Tenant | Dual-control approval queue | [link](approvals.md) |
| Templates | Tenant | Certificate blueprints | [link](templates.md) |
| Operators & Roles | Tenant | RBAC: users, roles, permissions | [link](users_roles.md) |
| Logs | Tenant | Immutable audit trail | [link](audit.md) |
| Settings | Tenant | General, Log Rotation, Branding | [general](settings_general.md) |
| User Profile | Tenant | Account, MFA, effective permissions | [link](profile.md) |

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

See the full assignable permission list in [API Keys](key_management.md#permission-catalog-assignable-scopes)
— the same catalog backs [role definitions](users_roles.md).
