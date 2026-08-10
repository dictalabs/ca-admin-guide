# Sign in to the Super Admin Portal

> **Platform Setup.** This is the first step of the configuration workflow — see
> [Platform Setup → Overview & Workflow](platform_setup.md).

## Purpose

The **Tenant Super Admin portal** is the platform control plane. Sign in here to verify your
license, manage super-admin accounts, and — if you run more than one workspace — provision and
govern **tenants**.

**Who should use it:** platform operators who run the Dictalabs CA service.

> **Single (default) tenant?** Multi-tenancy is optional. If you operate one workspace you rarely
> touch this portal beyond license and super-admin management — the tenant model, provisioning, and
> isolation are covered separately in [Multi-Tenancy & Tenants](multi_tenancy.md).

## Navigation

Open `https://admin.<your-domain>` and sign in with a **Super Admin** account. On success you land
on **Administration → Tenants**.

![Super Admin sign-in](images/01_super_admin_sign_in.png)

## What's next

From here the Platform Setup steps are: [Verify License & Modules](02_license.md) →
[Manage Super Admins](04_super_admins.md), then [Sign in to the Tenant](05_tenant_sign_in.md) to
begin PKI configuration. Running multiple workspaces? Provision them first via
[Multi-Tenancy & Tenants → Create a Tenant](03_create_tenant.md).

!!! note "Important Notes"
    - Module availability (CA, VA) and the multi-tenant capability are controlled by the installed
      license — see [Verify License & Modules](02_license.md).
