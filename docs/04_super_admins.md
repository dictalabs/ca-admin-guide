# Manage Super Admins

> **Platform Setup.** **Prerequisite:** signed in to the [Super Admin portal](01_super_admin_overview.md).

## Purpose

Super Admins are system-level accounts that administer the CA service across **all** tenants.
This page manages who holds that privileged access.

## Navigation

`Administration → Administrators`

## Overview

![Super admins list](images/04_super_admins_list.png)

- **Add Administrator** button, search, status filter, pagination.
- **Table** — Email, Name, Status, Created, Actions.

The per-row actions menu offers **Delete**.

![Admin row actions](images/04_super_admin_actions_menu.png)

## Fields — Create Administrator dialog

![Create administrator](images/04_create_super_admin_dialog.png)

| Field | Description | Required | Notes |
| ----- | ----------- | -------- | ----- |
| Username | Login username | Yes | — |
| Email Address | Administrator email | Yes | — |
| Full Name | Display name | Yes | — |
| Password / Confirm Password | Account password | Yes | Minimum 12 characters; ≥1 uppercase, digit, special character. |

## Step-by-Step

1. Open **Administration → Administrators**.
2. Click **Add Administrator**.
3. Enter username, email, full name, and a compliant password.
4. Click **Create**.

!!! note "Important Notes"
    - **Best practice:** keep at least two active administrators to avoid lockout.

!!! warning "Security Warning"
    Super Admins have system-wide privileges across every tenant. Grant sparingly.
