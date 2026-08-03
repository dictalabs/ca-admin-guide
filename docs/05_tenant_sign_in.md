# Sign in to the Tenant

> **Access the Tenant.** **Prerequisite:** the tenant has been [created](03_create_tenant.md).

## Purpose

Everything from here on happens inside a single tenant. Sign in with a tenant operator account
to begin configuring the PKI.

## Navigation

Open the tenant URL — `https://<subdomain>.<your-domain>` (e.g. `https://tenant.example.com`).

![Tenant sign-in](images/05_tenant_sign_in.png)

## Fields

| Field | Description | Required |
| ----- | ----------- | -------- |
| Username or Email | Operator login | Yes |
| Password | Operator password | Yes |

If the operator account has **SSO** or **Mutual TLS** enabled, complete that method instead of
a password (see [Operators](08_operators.md)).

## Step-by-Step

1. Open the tenant subdomain URL.
2. Enter your **Username or Email** and **Password**.
3. Click **Sign in** → you land on the [Dashboard](06_dashboard.md).

!!! note "Important Notes"
    - Each tenant displays its own **branding** (logo, name, theme) on the sign-in screen — see [Branding](25_settings_branding.md).
    - The top bar offers a theme toggle, language selector, and the account menu (Profile, Logout).
