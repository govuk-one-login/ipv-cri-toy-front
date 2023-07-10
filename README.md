# Digital Identity Credential Issuer

# di-ipv-cri-toy-front

Frontend for the Toy Credential Issuer

This is the home for the front end user interface for a credential issuer as a part of the Identity Proofing and Verification (IPV) system within the GDS GOV.UK One Login service. Other repositories are used for core services or other credential issuers.

# Installation

Clone this repository and then run

```bash
npm install
```

## Precommit Hooks

Install `pre-commit` from [here](https://pre-commit.com/)

Run `pre-commit install` to install pre-commit hooks locally.

If you get the error:

```
[ERROR] Cowardly refusing to install hooks with `core.hooksPath` set.
```

Run `git config --unset-all core.hooksPath` to reset your git hook settings.

### Code Owners

This repo has a `CODEOWNERS` file in the root and is configured to require PRs to reviewed by Code Owners.
