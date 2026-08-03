# Dashboard Overview

> **Access the Tenant.** **Prerequisite:** [signed in to the tenant](05_tenant_sign_in.md).

## Purpose

The Dashboard is the tenant landing page — a quick read on certificate operations, alerts, and
system health before you start configuring.

## Navigation

`Dashboard` — the default page after login.

## Overview

![Dashboard – Overview](images/06_dashboard_overview.png)

- **Critical Alerts** banner (severity-tagged issues).
- **Stat cards** — Active Certificates, Pending Requests, CA Coverage, Monthly Issuance.
- Four **tabs**:

| Tab | Contents |
| --- | -------- |
| Overview | Issuance trend, distribution by type, system performance, Quick Actions |
| Recent Activity | Recent system actions |
| Certificate Authorities | CA hierarchy / status |
| System Health | Connector health, performance |

**Recent Activity**

![Dashboard – Recent Activity](images/06_dashboard_recent_activity.png)

**Certificate Authorities**

![Dashboard – Certificate Authorities](images/06_dashboard_certificate_authorities.png)

**System Health**

![Dashboard – System Health](images/06_dashboard_system_health.png)

## Actions

- Switch tabs; use **Quick Actions** (Issue Certificate, Create Template, Configure CA, Review
  Requests) to jump into workflows.

!!! note "Important Notes"
    - Metrics are tenant-scoped; empty environments show zero/empty series.
    - On a fresh tenant, continue with [Roles & Permissions](07_roles.md) to set up access.
