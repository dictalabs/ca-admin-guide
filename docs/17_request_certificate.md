# Request & Issue a Certificate

> **Issuance.** **Prerequisite:** a [Certificate Profile](16_certificate_profiles.md).

## Purpose

Request (and, when auto-approved, issue) a certificate through a guided wizard that enforces the
selected profile's template constraints. This is the payoff of the configuration flow.

## Navigation

`Certificate Requests → Request Certificate`

## Overview — the wizard

### Step 1 — Select Certificate Profile
Choose a profile card (each shows Template, Issuing CA, Certificate Type).

![Step 1 – select profile](images/17_request_select_profile.png)

### Steps 2–4 — Subject, SAN, CSR
Fill the allowed **Subject** fields and required **SAN** entries (the profile's template controls
which are allowed/required), then provide the **CSR**.

![Request form](images/17_request_form.png)

**CSR options** — *Upload CSR* (paste/upload PEM) or *Generate Key + CSR*:

![Generate Key + CSR](images/17_request_generate_key.png)

| Field (Generate Key + CSR) | Description | Required |
| --- | --- | --- |
| Crypto Source | Where the key is generated | Yes |
| Key Algorithm / Key Size | Key parameters | Yes |
| Key Name | Key identifier | Yes |
| Key Password | Protects the key | Optional |

**Submit & Generate Certificate** stays disabled until all required data is present.

## Reviewing requests

`Certificate Requests → Requests List` lists every request with Status
and Approval Mode.

![Requests list](images/17_certificate_requests_list.png)

A row's **View** shows full request details (subject, SAN, CSR PEM with Download).

![Request details](images/17_certificate_request_details.png)

## Step-by-Step

1. Open **Request Certificate** and pick a **profile**.
2. Fill the allowed **Subject** fields and required **SAN** entries.
3. **Upload CSR** or **Generate Key + CSR**.
4. Click **Submit & Generate Certificate**.

!!! note "Important Notes"
    - The profile/template controls which subject and SAN fields you may set.
