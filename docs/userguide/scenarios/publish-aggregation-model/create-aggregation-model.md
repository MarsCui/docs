---
prev: false
next: true
---

# Publish an Aggregation Model

This scenario guides providers through exposing multiple compatible published models behind one endpoint and routing requests according to cost, success rate, balance, random, or round-robin policy.

## Applicable Roles

- Model Provider

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

1. Open **My Models > My Aggregations**, select **Create Aggregation Model**, and choose the private or public publication area.

![Choose where to publish the aggregation model](./images/choose-where-to-publish.png)

2. Select the aggregation model type.

![Select the aggregation model type](./images/step-1-model-type.png)

3. Add the first compatible published member model and confirm its enabled state.

![Choose the first member model](./images/step-1-choose-model1.png)

4. Add at least one more compatible member model so routing and failover have alternatives.

![Choose the second member model](./images/step-1-choose-model2.png)

5. Configure each member's success-rate threshold, concurrency, context, cost, and enabled state.
6. Set the aggregation identifier, routing policy, tags, and description.

![Complete aggregation model basic information](./images/step-1-basic-information.png)

7. Choose immediate or scheduled publication according to the release plan.

![Choose the publication method](./images/step-1-publication-method.png)

8. Configure free or paid billing, then save or submit the aggregation model for review.

![Configure aggregation model billing](./images/step-2-billing-configuration.png)

9. After publication, make controlled calls and observe routing and member health.

For related model publication and monitoring concepts, see [Publish and Call a Model](../../../usermanual/model-services/end-to-end/publish-and-call-model/) and [My Models](../../../usermanual/model-services/user/studio/my-models/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | At least two enabled member models are present. |
| 2 | Routing policy matches the business objective and thresholds are complete. |
| 3 | Publication or review status is correct. |
| 4 | A controlled request succeeds through the aggregation endpoint. |
| 5 | Remaining members accept traffic when one member is disabled. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| No member can be selected | Publication state, modality, protocol, and visibility |
| Submission fails | Member count, required fields, billing, and publication area |
| Traffic always selects one member | Policy, enabled state, success rate, and cost thresholds |
| Aggregation calls fail | Member health, protocol compatibility, rate limits, and timeout |
