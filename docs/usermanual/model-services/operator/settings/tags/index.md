# Tag Management

::: info Document Information
Version: v1.0
Updated: 2026-07-08
:::

## Feature Overview

Tag Management helps operators maintain model tags, tag groups, display order, and enabled status so users can filter and discover models consistently.

| Item | Content |
| --- | --- |
| Applicable role | Operator |
| Navigation path | System Settings > Tag Management |
| Page route | /operator/settings/tags |
| Managed objects | Model tags, tag groups, display order, and enabled status |
| Typical use | Maintain model marketplace filters and display tags |

### Beginner Explanation

Tags are like shelf labels in the model marketplace. They help users filter models by capability, industry, recommendation level, or scenario. Confusing tag names directly reduce discovery efficiency.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Tag group | Organizes tags by capability, industry, recommendation, or scenario. |
| Applicable object | Model, app, or content type to which a tag can be bound. |
| Sort value | Controls the display order of tags in filter areas or details pages. |
| Enabled/disabled status | Controls whether a tag can continue to be bound and filtered. |
## Prerequisites

1. The current account has tag maintenance permission.
2. Tag groups, naming rules, sorting rules, and applicable objects have been determined.
3. Before adding a tag, check whether synonymous or duplicate tags already exist.
4. Before taking a tag offline, confirm the number of bound models and impact on filter entries.
## Page Description

This page maintains the tag system for models, apps, or content, including tag name, group, sort order, enabled/disabled status, and display scope. Operators should unify naming rules and avoid duplicate tags and internal abbreviations.

Page screenshot:

![Tag list](./images/tags-list.png)

Used to view tag names, categories, sort order, and enabled status.

## Main Operations

### Steps

1. Go to `System Settings > Tags`.
2. Filter by tag group, status, or keyword.
3. When adding a tag, fill in name, group, sort order, and applicable object.
4. Before enabling, check whether it duplicates or overlaps with existing tags.
5. After saving, validate filtering on the model discovery page.

Key screenshot:

![Add tag](./images/add-tag.png)

Confirm naming and filtering rules before adding a tag.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Tag Name | Yes | Text | `Long context` | User-visible tag name. |
| Tag Group | Yes | Dropdown | `Model capability` | Used to organize the tag system. |
| Applicable Object | Yes | Multi-select | `Model` | Object type to which the tag can be bound. |
| Sort Order | No | Number | `20` | Controls display order. |
| Status | Yes | Enum | `Enabled` | Controls whether the tag can be used. |

### Pitfalls

- Do not use internal project codenames as user-visible tags.
- Before disabling a tag, check bound models and filter entries.
- Do not mix capability tags, industry tags, and recommendation tags in the same group.

### Result Checks

1. The tag can be bound on model editing or app editing pages.
2. Users can filter correct results by tag on the discovery page.
3. After disabling, the tag no longer appears as a new binding option.
## FAQ

### Tag Filter Result Is Empty

**Symptom:**

No models are displayed after a user clicks a tag.

**Possible Causes:**

- No listed models are bound to this tag.
- The tag status is disabled.
- Model visibility scope does not include the current user.

**Handling:**

1. Check tag binding relationships.
2. Confirm tag enabled status.
3. Verify model listing and visibility scope.

### Tag Meanings Are Duplicated

**Symptom:**

There are multiple tags with similar meanings in the list.

**Possible Causes:**

- Unified naming rules are missing.
- Different operators created tags based on personal habits.
- Tag group boundaries are unclear.

**Handling:**

1. Merge duplicate tags.
2. Migrate model binding relationships.
3. Supplement tag naming and grouping rules.

## Next Steps

1. Bind tags to models or apps.
2. Validate filtering on the discovery page.
3. Periodically clean up low-usage or duplicate tags.

## Notes

- Do not use internal project codenames as user-visible tags.
- Migrate bound models before merging tags.
- For tags involving customer names or industry-specific labels, confirm display boundaries.
