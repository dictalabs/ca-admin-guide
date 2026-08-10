# Glossary & Abbreviations

Common terms and acronyms used throughout this guide.

## Core PKI

| Term | Meaning |
| ---- | ------- |
| **PKI** | Public Key Infrastructure — the systems, policies, and roles for issuing and managing digital certificates. |
| **CA** | Certificate Authority — an entity that issues and signs certificates. A **Root CA** is self-signed and anchors trust; a **Sub CA** (intermediate) is signed by another CA. |
| **RA** | Registration Authority — the function that validates and approves certificate requests before issuance. |
| **VA** | Validation Authority — the service that answers certificate-status (revocation) queries; in this platform it serves **OCSP**. |
| **CSR** | Certificate Signing Request — a request containing a public key and subject details, submitted to a CA to obtain a certificate. |
| **DN** | Distinguished Name — the structured identity of a certificate subject or issuer (e.g. `CN`, `O`, `OU`, `C`). |
| **CN** | Common Name — the primary name field within a DN. |
| **SAN** | Subject Alternative Name — additional identities (DNS names, IPs, emails, URIs) a certificate is valid for. |
| **EKU** | Extended Key Usage — the purposes a certificate may be used for (e.g. server auth, client auth, code signing). |
| **OID** | Object Identifier — a globally unique identifier used for policies, extensions, and algorithms. |

## Revocation & validation

| Term | Meaning |
| ---- | ------- |
| **CRL** | Certificate Revocation List — a signed, periodically published list of revoked certificates. A **delta CRL** lists only changes since the last full CRL. |
| **CDP** | CRL Distribution Point — the URL where a CRL is published. |
| **OCSP** | Online Certificate Status Protocol — a live query/response protocol for checking whether a single certificate is revoked. |
| **AIA** | Authority Information Access — a certificate extension pointing relying parties to the issuer certificate and the OCSP responder. |

## Cryptography

| Term | Meaning |
| ---- | ------- |
| **HSM** | Hardware Security Module — a tamper-resistant device that stores keys and performs signing. |
| **PKCS#11** | Standard API for talking to HSMs and other crypto tokens. |
| **RSA / ECDSA** | Classical public-key signature algorithms. |
| **PQC** | Post-Quantum Cryptography — algorithms resistant to quantum attack. |
| **ML-DSA / ML-KEM** | NIST post-quantum standards: ML-DSA (signatures, FIPS 204) and ML-KEM (key encapsulation, FIPS 203). |
| **PEM / DER** | Certificate/key encodings — PEM is Base64 text, DER is binary. |

## Protocols & operations

| Term | Meaning |
| ---- | ------- |
| **SCEP / ACME** | Automated certificate-enrollment protocols. |
| **TLS / SSL** | Transport Layer Security — the protocol that server-auth certificates secure (SSL is its predecessor). |
| **MFA** | Multi-Factor Authentication. |
| **RBAC** | Role-Based Access Control — permissions granted through roles. |
| **SSO** | Single Sign-On. |
| **mTLS** | Mutual TLS — both client and server present certificates. |
| **JWT** | JSON Web Token — the session token issued after sign-in. |
| **SIEM** | Security Information and Event Management — a platform that ingests security logs/events. |
| **Syslog** | Standard protocol for forwarding log messages. |
| **PEN** | Private Enterprise Number — an IANA-assigned identifier used in Syslog structured data. |
| **Tenant** | An isolated workspace on a shared deployment — see [Multi-Tenancy & Tenants](multi_tenancy.md). |
| **Operator** | A user account scoped to one tenant, with permissions granted via roles. |
| **Super Admin** | A platform-level account that administers the service across all tenants. |
