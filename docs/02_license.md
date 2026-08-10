# Verify License & Modules

> **Platform Setup.** **Prerequisite:** signed in to the [Super Admin portal](01_super_admin_overview.md).

## Purpose

Before configuring the PKI, confirm which product **modules** (CA, VA) and **capabilities**
(e.g. multi-tenant mode) the license enables, and check usage against limits. Modules that the
license does not enable are hidden from the tenant portal.

## Why the license matters

The license is the entitlement that unlocks functionality and enforces limits. It controls **what
you can use** (modules and capabilities), **how much** (usage quotas), and **for how long**
(validity window). If a module isn't licensed its menus don't appear; if a quota is reached you
can't create more of that resource; and if the license expires past its grace period, gated
features stop working. Verifying it first avoids surprises mid-configuration.

## What's in the license

| Bit | What it controls | Why it matters |
| --- | ---------------- | -------------- |
| **Customer / License ID** | Identifies who the license was issued to and its unique id. | Used for support and to confirm you're running the correct license. |
| **Machine ID** | Binds the license to this deployment's system UUID. | The license only validates on the machine it was issued for — a mismatch disables gated features. |
| **Valid From / To** | The activation and expiry dates. | Outside this window the license is not active. Track **Days Until Expiry**. |
| **Grace Period** | Extra time after expiry before enforcement kicks in. | A short buffer to renew without an outage — don't rely on it in production. |
| **Status badge** | Overall license state (valid / expiring / expired / invalid). | At-a-glance health of your entitlement. |
| **Module: CA** | The Certificate Authority engine (CAs, certificates, profiles, templates, issuance). | Required to run the core PKI. Without it, issuance is unavailable. |
| **Module: VA** | The Validation Authority / OCSP responder. | Required to serve live OCSP revocation status. Without it, rely on CRLs only. |
| **Capability: Multi-tenant mode** | Whether multiple isolated [tenants](multi_tenancy.md) can be created. | Off = single default tenant only. On = provision many workspaces. |
| **Usage quotas** | Limits for Tenants, Administrators, Operators, Certificate Authorities, Active Certificates, Roles, API Keys. | Hard ceilings — creating a resource fails once its quota is reached. Blank/unlimited where allowed. |

> Terms like **CA**, **VA**, **OCSP**, and **CRL** are defined in the
> [Glossary & Abbreviations](glossary.md).

## Navigation

`Administration → License`

## Overview

![License Management](images/02_license_overview.png)

- **License Overview** — Customer, License ID, Machine ID, Valid From/To, Days Until Expiry,
  Grace Period, and a status badge.
- **Licensed Modules** — enabled modules (e.g. **CA**, **VA**).
- **Capabilities** — feature flags such as *Multi-tenant mode: Enabled*.
- **Licensed Usage** — current vs limit for Tenants, Administrators, Operators, Certificate
  Authorities, Active Certificates, Roles, API Keys.
- **Tenant Usage** — per-tenant resource breakdown.

## Actions

- **Upload License** — install a new license file (opens the operating-system file picker).

## Step-by-Step

1. Open **Administration → License**.
2. Confirm **Licensed Modules** include the modules you need (CA and/or VA).
3. Check **Capabilities** shows *Multi-tenant mode: Enabled*.
4. If updating entitlements, click **Upload License** and choose the vendor file.

!!! note "Important Notes"
    - **Capability gating:** the tenant portal hides modules the license does not enable — absence of a menu item may mean "not licensed", not "removed".

!!! warning "Warning"
    Uploading an invalid/expired license can disable modules system-wide. Verify the file and validity window before uploading in production.
