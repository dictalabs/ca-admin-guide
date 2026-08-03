# Screen Inventory

Complete inventory of screens audited in both portals, with route, tabs, and dialogs.

## Tenant Super Admin portal (`https://admin.<domain>`)

| Screen | Route | Tabs | Dialogs / panels |
| ------ | ----- | ---- | ---------------- |
| Sign In | `/login` | — | — |
| Tenants | `/platform/tenants` | — | Create Tenant; row Actions (Suspend/Reactivate/Delete); Copy URL |
| Tenant Detail | `/platform/tenants/:id` | — | General, Quotas, Request rate limit; Save changes |
| Super Admins | `/platform/super-admins` | — | Create Administrator; row Actions (Delete) |
| License Management | `/platform/license` | — | Overview, Licensed Modules, Capabilities, Licensed Usage, Tenant Usage; Upload License (OS file picker) |

## Tenant portal (`https://<subdomain>.<domain>`)

| Screen | Route | Tabs | Dialogs |
| ------ | ----- | ---- | ------- |
| Sign In | `/login` | — | — |
| Dashboard | `/` | Overview, Recent Activity, Certificate Authorities, System Health | — |
| Certificates | `/certificates` | — | View, Revoke (row actions) |
| Requests List | `/certificate-requests` | — | Request Details (View) |
| Request Certificate | `/certificate-request` | Step 4: Upload CSR / Generate Key + CSR | wizard (4 steps + submit) |
| Certificate Authorities | `/certificate-authorities` | Key Configuration, Certificate Data, Directives, CRL Settings, Distribution | Create CA; Download; Revoke CA |
| Validation Authorities | `/validation-authorities` | Validation Authorities, External CAs, Sync Diagnostics | Create VA; Sync; DLQ replay |
| Certificate Profiles | `/certificate-profiles` | — | Create Profile; View Details; Edit Profile |
| Crypto Sources | `/crypto-sources` | — | Add (Create Crypto Source) |
| Connectors | `/connectors` | Configuration, Monitoring, Logs, DLQ | Add Connector; Delete |
| Notifications | `/notifications` | — | Create Notification |
| API Keys | `/key-management` | — | Generate API Key (full permission catalog) |
| Approvals | `/approvals` | — | View / Approve / Reject (when items exist) |
| Templates | `/templates` | (dialog) General, Permissions, Extensions, Validation Data, Subject Fields, SAN Constraints | Create Template; View; Edit |
| Operators & Roles | `/operators` | Operator Management, Roles & Permissions | Create Operator; Create Role; View/Edit |
| Logs | `/audit` | — | View (log detail) |
| User Profile | `/profile` | — | Edit Profile |
| General Settings | `/settings/general` | — | — |
| Log Rotation | `/settings/logging` | — | — |
| Branding | `/settings/branding` | — | theme customizer |
| Forgot/Reset Password | `/forgot-password`, `/reset-password` | — | — |

## Notes

- Tenant nav items are gated by **permissions** and **license** (CA/VA modules).
- Read-only audit: post-submit/confirmation screens and the Approvals decision dialog (empty
  queue) were not captured.
