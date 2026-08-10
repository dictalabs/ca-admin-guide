# Operators

> **Access Control.** **Prerequisite:** at least one [role](07_roles.md) exists.

## Purpose

Operators are the tenant's user accounts. Here you create them, assign a role, and set their
password. Each operator signs in with a username and password; a role governs what they are
allowed to do.

## Navigation

`Operators & Roles` → **Operator management** tab.

## Overview

![Operator management](images/08_operators_list.png)

### Operator management

Lists every operator in the tenant as a card and is the entry point for creating, viewing,
editing, and deleting operator accounts.

Each operator card shows full name, email, status badge, department, location, last login,
created date, and the assigned role.

Controls on this tab:

- **Create operator** — opens the Create operator dialog (requires the `operator.create` permission).
- **Search operators…** — filters the list by name, email, or username as you type.
- **Status** filter — narrows the list to **All status**, **Active**, or **Inactive** operators.
- **Clear** — resets the search box and status filter.
- **View / Edit / Delete** (per card) — open the operator's details, edit its fields, or remove it.
  Edit and Delete appear only with the `operator.edit` / `operator.delete` permissions.

## Fields — Create operator dialog

![Create operator](images/08_create_operator_dialog.png)

| Field | What to enter | Why it matters |
| ----- | ------------- | -------------- |
| Full name | The operator's display name, 3–50 characters. | Required. Identifies the operator in lists, audit logs, and approvals. |
| Email | A valid email address (e.g. `john.doe@acme.com`). | Required. Used to reach the operator and must be unique. |
| Username | A login name, 3–50 characters (e.g. `admin`). | Required. This is what the operator types to sign in; it cannot be changed later. |
| Department | The team or org unit the operator belongs to. | Optional. Helps organise and locate operators. |
| Phone | A contact phone number, with country code. | Optional. Contact detail only. |
| Location | The operator's site or city (e.g. `San Francisco, CA`). | Optional. Contact/organisational detail only. |
| Status | **Active** or **Inactive**. Defaults to Active. | Inactive operators exist but cannot sign in — use it to suspend access without deleting the account. |
| Role | Pick one role from the list of active roles. | Required. The role determines every permission the operator has; without it the operator can do nothing. |
| Password | A password meeting the strength rules (see below). | Required. Password is the only sign-in method, so the account cannot be used until it is set. |
| Confirm password | Re-enter the same password. | Required. Guards against typos that would lock the operator out. |
| User must create a new password at next login | Enable to force a reset on first sign-in. | Recommended when you set an initial password yourself, so the operator picks their own secret. |

The password must **be at least 8 characters** and **include an uppercase letter, a number, and a
special character**; the two password fields must match.

- The **Authentication methods** section contains only the password fields — password is always
  required and is the sole sign-in method.
- **Create** is disabled until full name, email, username, role, password, and confirmation are all
  filled in.

## Fields — Edit operator dialog

The Edit operator dialog reuses the same fields with two differences:

- **Username** and **Email** are read-only and cannot be changed after creation.
- **Password** and **Confirm password** are optional — leave them blank to keep the current
  password, or enter a new one (subject to the same strength rules) to reset it.

## Step-by-Step

1. Open **Operators & Roles → Operator management**.
2. Click **Create operator**.
3. Fill Full name, Email, and Username; choose a **Role** and **Status**.
4. Set a **Password** and **Confirm password**; optionally tick **User must create a new password at
   next login**.
5. Click **Create**.

!!! note "Important Notes"
    - Password is the only authentication method; every operator must have one.
    - Set **Status** to Inactive to suspend an operator without deleting the account.
    - The last active admin cannot be removed or deactivated (lockout guard).
