# Roles & Permissions

> **Access Control.** **Prerequisite:** [signed in to the tenant](05_tenant_sign_in.md).
> Set up roles before creating operators, so each operator can be assigned the right role.

## Purpose

Roles bundle fine-grained permissions and (optionally) require approval for protected actions.
They are the foundation of the tenant's role-based access control (RBAC).

## Navigation

`Operators & Roles` → **Roles & Permissions** tab.

## Overview

![Roles & Permissions](images/07_roles_list.png)

- **Create Role** button, search, approval-status filter.
- **Role cards** — name, permission count, **Requires Approval: Yes/No**, **Assigned Operators**,
  plus **View / Edit / Delete**.

A predefined **system_owner** role (full privileges) is seeded per tenant.

## Fields — Create Role dialog

![Create Role](images/07_create_role_dialog.png)

| Field | Description | Required | Notes |
| ----- | ----------- | -------- | ----- |
| Role name | Display name | Yes | — |
| Description | Purpose | No | — |
| Requires Approval | Route this role's protected writes to [Approvals](19_approvals.md) | No | Toggle |
| Permissions | Per-permission switches grouped by resource | Yes | See the full catalog on the [API Keys](21_api_keys.md#permission-catalog) page |

## Step-by-Step

1. Open **Operators & Roles → Roles & Permissions**.
2. Click **Create Role**.
3. Enter name/description; set **Requires Approval** if dual-control is needed.
4. Toggle the required **Permissions**.
5. Save.

!!! note "Important Notes"
    - A role with **Requires Approval** turns its holders' protected writes into pending approvals.
    - Grant the minimum permissions each role needs.
