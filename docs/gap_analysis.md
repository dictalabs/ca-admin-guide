# Gap Analysis

Comparison of the **old Admin Guide** against the **current platform** found in the live audit.
The old guide documented a single-tenant operator app and predates multi-tenancy and several
modules.

## Missing / outdated by module

| Module | Missing Section | Required Update |
| ------ | --------------- | --------------- |
| Multi-Tenancy | Entire concept absent | Add tenant isolation model (schema-per-tenant, subdomain routing, soft/hard delete) — see [Overview](01_super_admin_overview.md) |
| Tenant Super Admin portal | Entire portal absent | New chapter: [Tenant Management](03_create_tenant.md), [Super Admins](04_super_admins.md), [License](02_license.md) |
| Tenant Management | No coverage | Create-tenant fields (immutable subdomain, quotas, initial admin), lifecycle (suspend/reactivate/soft-delete) |
| Super Admins | No coverage | System administrator CRUD, 12-char password policy |
| License Management | No coverage | License modules (CA/VA), capabilities, usage quotas, per-tenant usage, upload |
| Per-tenant quotas / rate limit | No coverage | Document quota enforcement + request rate limit |
| Login | SSO/mTLS mentioned but unclear | Clarify: per-operator **Password / SSO / Mutual TLS** toggles; per-tenant branding on login |
| Dashboard | Old single view | Document 4 tabs (Overview, Recent Activity, CAs, System Health) + Quick Actions |
| Certificate Requests | Basic form | Replace with 4-step wizard (profile → subject → SAN → CSR, Upload vs Generate-Key) |
| Certificate Authorities | Old tab set | Update to actual 5 tabs (Key Config, Certificate Data, Directives, CRL Settings, Distribution); External CA type |
| Validation Authorities | OCSP basics | Add 3 tabs incl. External CAs and **Sync Diagnostics** (resync, batch push, DLQ replay) |
| Templates | Not separated by config dimensions | Document 6-tab create (General, Permissions, Extensions, Validation Data, Subject Fields, SAN Constraints) |
| Approvals | Not covered | New: approval workflow tied to role "Requires Approval"; Approve/Reject queue |
| API Keys | Not covered (or basic) | New: full permission catalog, rate limit, IP allowlist, expiry, rotate; secret-shown-once |
| Connectors | Partial | Add types (SIEM/SMTP/SYSLOG/Crypto Engine) + tabs (Configuration, Monitoring, Logs, DLQ) |
| SIEM / DLQ | Not covered | New: SIEM push connector, DLQ replay (connector + VA + permissions) |
| Operators & Roles | Basic | Add per-operator auth methods, role "Requires Approval", ~52-permission catalog |
| Crypto Sources | Partial | Document Store Type (PKCS#11/SOFTWARE) + connector dependency |
| Logs (Audit) | "Audit Logs" basic | Update columns + immutable detail view; relation to Log Rotation/SIEM |
| Settings → Log Rotation | Partial | Add log signing (crypto source) and cloud archival |
| Settings → Branding | Basic | Per-tenant theme customizer; isolation note |
| User Profile | Basic | Add MFA (TOTP), Client-cert auth, effective-permissions view |
| Reference | None | New: [Screen](screen_inventory.md), [Module/Feature](module_inventory.md), [Screenshot](screenshot_inventory.md) inventories |

## Terminology / structural changes

| Old | Current |
| --- | ------- |
| "Key Management" nav item | **API Keys** (`/key-management`) |
| "Users & Roles" / "Operators" | **Operators & Roles** (tabs: Operator Management, Roles & Permissions) |
| "Audit Logs" | **Logs** (`/audit`) |
| "Logging" settings | **Log Rotation** |
| Single-tenant app | **Two portals**: Tenant Super Admin + Tenant |

## Items in old guide to verify/keep

- "Publish to Active Directory" (old CA doc) — **not observed** in the current Distribution tab;
  confirm whether still supported before documenting.
- "Subject Directory Attributes" — present in request details; retained.

## Audit limitations (read-only)

- Post-submit success/confirmation screens not captured (no live writes).
- Approvals decision dialog not captured (empty queue in QA tenant).
- Upload License opens an OS file picker (no in-app modal).
- One transient "Tenant not found" API error during the audit (resolved on Retry).
