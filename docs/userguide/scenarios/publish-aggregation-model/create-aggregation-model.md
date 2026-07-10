---
prev: false
next: true
---

# Publish an Aggregation Model

This scenario guides providers through exposing multiple compatible published models behind one endpoint and routing requests according to cost, success rate, balance, random, or round-robin policy.

## Target Outcome

- At least two healthy member models are included.
- Routing policy, member thresholds, pricing, and publication scope are explicit.
- The aggregation model is saved or submitted for review successfully.
- Controlled calls verify normal routing and member failover behavior.

## Before You Start

1. Prepare at least two published member models with compatible modalities and protocols.
2. Decide whether the objective is cost, success rate, load distribution, or availability.
3. Compare member pricing, context, concurrency, region, and health.

## Procedure

1. Open `My Models > My Aggregations` and select `Create Aggregation Model`.
2. Choose the private or public publication area.
3. Select model type and add at least two member model instances.
4. Configure each member's enabled state, success-rate threshold, concurrency, context, and cost.
5. Set the aggregation identifier, routing policy, tags, description, and publication time.
6. Configure free or paid billing and save or submit for review.
7. After publication, make controlled calls and observe routing and member health.

For related model publication and monitoring concepts, see [Publish and Call a Model](../../../usermanual/model-services/end-to-end/publish-and-call-model/) and [My Models](../../../usermanual/model-services/user/studio/my-models/).

## Completion Checklist

- [ ] At least two enabled member models are present.
- [ ] Routing policy matches the business objective and thresholds are complete.
- [ ] Publication or review status is correct.
- [ ] A controlled request succeeds through the aggregation endpoint.
- [ ] Remaining members accept traffic when one member is disabled.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| No member can be selected | Publication state, modality, protocol, and visibility |
| Submission fails | Member count, required fields, billing, and publication area |
| Traffic always selects one member | Policy, enabled state, success rate, and cost thresholds |
| Aggregation calls fail | Member health, protocol compatibility, rate limits, and timeout |

## Feature Screenshots

![Aggregation model basic information](./images/step-1-basic-information.png)

![Aggregation model billing](./images/step-2-billing-configuration.png)
