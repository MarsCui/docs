---
prev: false
next: true
---

# Model Sources

Model sources define the provider endpoint and regional connection information used when providers publish model services.

## Procedure

1. Open `Settings > Model Sources` and create the source identity.
2. Add regional endpoints and confirm network reachability.
3. Define required request-header names using placeholders rather than real values.
4. Save and confirm that templates and provider publishing can select the source.

See [Model Sources in the User Manual](../../../../usermanual/model-services/operator/settings/model-source/).

## Completion Checklist

- [ ] Source name and regional endpoints are correct.
- [ ] Required headers and authentication type are documented without real secrets.
- [ ] The source is selectable and connectivity testing can run.

## Feature Screenshot

![Model source settings](./images/basic-information.png)
