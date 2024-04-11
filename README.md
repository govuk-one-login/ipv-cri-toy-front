# ipv-cri-toy-front

[![Github Action: Scan repository](https://github.com/govuk-one-login/ipv-cri-toy-front/actions/workflows/scan-repo.yml/badge.svg?branch=main)](https://github.com/govuk-one-login/ipv-cri-toy-front/actions/workflows/scan-repo.yml?query=branch%3Amain)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ipv-cri-toy-front&metric=coverage)](https://sonarcloud.io/summary/overall?id=ipv-cri-toy-front)

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

## Environment Variables

- `LANGUAGE_TOGGLE_DISABLED` - Feature flag to disable Language Toggle, defaulted to `true`
