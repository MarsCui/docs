---
prev: false
next: true
---

# Scenario Overview - Recharge and Billing

This scenario distinguishes top-up records, resource quotas, resource usage, and model billing so users can explain balance and deduction results.

## Applicable Roles

- Platform User, Model Provider, and Platform Operator

## Goals

- Verify top-up and account-credit changes.
- Distinguish insufficient quota from insufficient credit.
- Map deductions to an instance, workload, or model call.

## Scenario Flow

**Main path:** Obtain spendable credits → Confirm resource quota → Generate and record usage → Reconcile deductions

| Stage | Key Result |
| --- | --- |
| 1. Obtain credits | A top-up or allocation creates spendable balance |
| 2. Confirm quota | Tenant compute and storage request limits are explicit |
| 3. Record usage | Instances, jobs, or model calls produce traceable details |
| 4. Reconcile deductions | Balance, credits, usage, pricing, and billing-period totals agree |

## Before You Start

- Decide whether the investigation concerns model calls or On-Prem resources.
- Define tenant, account, time range, billing period, and unit.

## Recommended Reading Order

1. Review top-up records
2. Review quota and credit
3. Review resource or model usage
4. Reconcile deduction details

## Document Index

| Document | Description |
| --- | --- |
| [Recharge and Billing Workflow](./billing-workflow) | Concepts, steps, failure branches, and feature screenshots |

## Completion Checklist

> **Purpose:** These are the scenario exit criteria. Use them to decide whether the outcome is observable and reviewable and whether you can continue to the next scenario. They do not repeat the procedure; if any item fails, return to the relevant feature guide and follow its troubleshooting section.

| Check | Pass Criteria |
| --- | --- |
| 1 | The top-up or credit-allocation record takes effect and spendable balance changes as expected. |
| 2 | Tenant quota supports the target workload and an instance, job, or model call produces traceable usage. |
| 3 | Balance, credits, usage, pricing, and deductions agree over the same billing period. |