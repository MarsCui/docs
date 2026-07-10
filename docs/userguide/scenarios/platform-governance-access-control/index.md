---
prev: false
next: true
---

# Scenario Overview - Platform Governance and Access Control

This scenario combines identity, resource authorization, model visibility, personal keys, rate limits, and credit controls into one governance path.

## Applicable Roles

- Administrator and Operator
- Provider and End User used to verify the result

## Goals

- Define who may access each function, resource, and model.
- Limit calls through keys, projects, model grants, quotas, and rate limits.
- Ensure new requests fail after access is revoked.

## Before You Start

- Define the governed object, owner, tenant, and business scope.
- List allowed actions, forbidden actions, limits, and rate controls.

## Recommended Reading Order

1. Configure identity and roles
2. Configure resource and model scope
3. Configure personal keys, rate limits, and credits
4. Verify with the target account and record the result

## Document Index

| Document | Description |
| --- | --- |
| [Governance Workflow](./governance-workflow) | Identity, resource, model, calling, credit controls, and a key-page screenshot |

## Completion Criteria

- Authorized accounts receive only the intended capability, and unauthorized accounts cannot access the object.
