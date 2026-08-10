# About Multi-Tenancy

> **Optional.** Multi-tenancy is a **license-gated capability**. Many deployments run a single
> **default tenant** and never need this section — skip it unless you must host multiple isolated
> workspaces.

## What multi-tenancy is

Dictalabs CA can host many **tenants** — isolated customer workspaces — on one deployment. Each
tenant has its own CAs, certificates, operators, roles, branding, and logs, and none can see
another's data. A **Super Admin** provisions and governs tenants from the
[Super Admin portal](01_super_admin_overview.md); operators work inside a single tenant.

## Why (and when) to use it

- **Service providers / MSPs** issuing PKI on behalf of multiple customers from one platform.
- **Enterprises** separating business units, environments, or trust domains that must not share
  data or trust roots.
- **Strong isolation** requirements — separate data, branding, and access per workspace.

If none of these apply, run the **default tenant** and manage the PKI directly — it is simpler to
operate and needs no per-tenant provisioning.

## Tenant isolation model

| Aspect | Behaviour |
| ------ | --------- |
| Data isolation | Each tenant's data lives in its own database schema (`t_<subdomain>`). Tenants never see each other's CAs, certificates, operators, or logs. |
| Routing | Each tenant is reached at its own **subdomain** — `https://<subdomain>.<your-domain>`. |
| Identity | Super Admins authenticate against a global account store (no tenant binding). Tenant operators are scoped to one tenant. |
| Provisioning | Creating a tenant provisions its schema, seeds an admin role + permissions, and creates the first tenant administrator in one transaction. |

## Working with tenants

1. Confirm the license enables **multi-tenant mode** — see [Verify License & Modules](02_license.md).
2. [Create a Tenant](03_create_tenant.md) — provision the workspace and its first administrator.
3. [Sign in to the Tenant](05_tenant_sign_in.md) at its subdomain and configure its PKI following
   the [Platform Setup workflow](platform_setup.md).

!!! note "Default tenant"
    A single-tenant deployment uses the default tenant — you do not create additional tenants and
    the tenant sign-in is simply the portal you configure the PKI in.
