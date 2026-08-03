# Create a Tenant

> **Platform Setup.** **Prerequisite:** a valid [license](02_license.md) with the
> required modules and multi-tenant mode enabled.

## Purpose

Provision an isolated tenant workspace and its initial administrator. Every PKI configuration
step that follows happens **inside** a tenant, so this is where real setup begins.

## Navigation

`Administration → Tenants`

## Overview

![Tenants list](images/03_tenants_list.png)

- **New tenant** button, search, status filter, pagination.
- **Table** — Subdomain, Name, Tenant admin, Status, Created, Actions (Edit, and a row **Actions**
  menu). Each subdomain has a **Copy tenant URL** button.

### Row actions

For an active tenant the actions menu offers **Suspend** and **Delete** (a suspended tenant shows
**Reactivate**). Deleted tenants are read-only.

![Tenant row actions](images/03_tenant_actions_menu.png)

## Fields — Create Tenant dialog

![Create tenant](images/03_create_tenant_dialog.png)

| Field | Description | Required | Notes |
| ----- | ----------- | -------- | ----- |
| Tenant name | Human-readable name | Yes | — |
| Subdomain | Tenant subdomain / slug | Yes | **Cannot be changed later.** Lowercase letters, digits, hyphens. |
| Max CAs / Max certs / Max operators / Max API keys | License quotas | Yes | Blank = Unlimited. |
| Max roles | License quota | No | Optional. |
| Username / Email | Initial tenant admin | Yes | Created in the same transaction. |
| Full name | Initial tenant admin name | No | — |
| Password / Confirm password | Admin password | Yes | ≥12 chars, 1 uppercase, 1 digit, 1 special character. |

## Tenant Detail (quotas & limits)

Open a tenant's **Edit** link to adjust name, quotas, and the per-tenant **request rate limit**;
the subdomain is read-only.

![Tenant detail](images/03_tenant_detail.png)

## Step-by-Step — Create a tenant

1. Open **Administration → Tenants**.
2. Click **New tenant**.
3. Enter **Tenant name** and **Subdomain** (permanent).
4. Set the required **quotas** (blank = Unlimited).
5. Fill the **initial tenant admin** username, email, and a compliant password.
6. Click **Create**.

!!! note "Important Notes"
    - **Best practice:** choose subdomains carefully — they are immutable.
    - Blank quota means *Unlimited*, not a default.

!!! warning "Warning"
    Delete is tenant-wide; use Suspend for temporary lockouts.
