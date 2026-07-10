# Scenario Overview - Model Experience and API Calling

This scenario helps users discover models, try them in the playground, call them through APIs, and review call records.

## Applicable Roles

- End User
- Provider reviewing customer calls

## Goals

- Find the target model and claim or confirm quota.
- Complete one playground request.
- Call the API with a personal key and review the call record.

## Before You Start

- Sign in with access to the target model.
- Prepare a personal key and confirm account credit and model quota.

## Recommended Reading Order

1. Review this overview and prerequisites
2. Follow the quick guide to discover and try the model
3. Complete an API request
4. Review the call record and troubleshoot failures

## Document Index

| Document | Description |
| --- | --- |
| [User Quick Guide](./user-quick-guide) | Sign-in, model discovery, quota, playground, API calling, call records, and screenshots |

## Completion Checklist

- [ ] The user can find the model and review capabilities, providers, and call guidance.
- [ ] A Playground request succeeds with input and output matching the model modality.
- [ ] An API request uses a personal authorization key and succeeds.
- [ ] My Calls contains the request for the same time and model.
- [ ] The provider can see corresponding redacted customer-call statistics.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Model is missing | Model state, public/private scope, tenant authorization, and filters |
| Playground fails | Input modality, parameters, model state, and account credits |
| API authentication fails | Personal key, header format, and model grant |
| API succeeds but call record is empty | Time range, processing delay, model, and account filters |
