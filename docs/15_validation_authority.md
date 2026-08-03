# Configure a Validation Authority (OCSP)

> **Validation.** **Prerequisites:** a [CA](13_create_sub_ca.md) and an OCSP signing
> certificate. Requires the **VA** license module.

## Purpose

A Validation Authority (VA) is an OCSP responder that answers real-time certificate-status
queries for a CA, and keeps in sync with the CA's revocation state.

## Navigation

`Validation Authorities`

## Overview

Three tabs plus a **Create Validation Authority** button.

### Validation Authorities
VA list + configuration form + per-CA Sync Status.

![Validation Authorities](images/15_validation_authority_form.png)

| Field | Description |
| ----- | ----------- |
| Name / Description | Responder identity |
| Certificate Authority | CA whose status this VA answers for |
| OCSP Signing Certificate | Certificate used to sign OCSP responses |
| Response validity / Max-Age (seconds) | Freshness / cache hints |
| ResponderID | KEYHASH / NAME |
| Non-issued certificate behavior | Response for unknown serials |
| Include chain / signing cert / nonce | Response options |
| Require signed requests / Omit revocation reason (CABF) | Compliance toggles |

### External CAs
External CAs whose status this VA serves.

![VA – External CAs](images/15_external_cas.png)

### Sync Diagnostics
CA→VA replay tools (Source, Batch Size, Resume/Reset, Run Full Resync, Push One Batch) and a
Dead-Letter Queue with **Replay Pending**.

![VA – Sync Diagnostics](images/15_sync_diagnostics.png)

## Fields — Create Validation Authority dialog

![Create VA](images/15_create_validation_authority_dialog.png)

## Step-by-Step

1. Open **Validation Authorities → Create Validation Authority** and complete the dialog.
2. Select the VA, set **Certificate Authority**, **OCSP Signing Certificate**, validity, and
   response options.
3. Click **Save**. Use **Sync This VA** / **Sync Diagnostics** if status is stale.

!!! note "Important Notes"
    - A VA depends on a response CA and an OCSP signing certificate.
    - Use **Sync Diagnostics** when events are stale or the DLQ has pending items.
