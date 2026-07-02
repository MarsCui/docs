# Tags

## Preface

| Item            | Content                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Target Audience | Operator                                                                                                                                                                           |
| Navigation Path | Settings > Tags                                                                                                                                                                    |
| Overview        | Define and manage the classification tag system for models (English UI title **Tags**). Supports a level-1 + multi-level sub-tag tree structure. Tags are used for classification and filtering in the model marketplace |

## Page Structure

### Search Area

The page top provides **Tag Type Tabs** (the screenshot currently shows the **Model** type only) + **Status Tabs** (**All** / Available / Unavailable) + a **Name** input box for searching, with **"Search"** and **"Reset"** buttons.

### Action Buttons

- The page top-right provides the **"Add Tag"** button (highlighted in purple) for creating a new level-1 tag.
- The Actions column of a level-1 tag row contains 4 operations: **Edit / Add / Disable / Delete** ("Add" is used to add sub-tags).
- The Actions column of a sub-tag row contains 3 operations: **Edit / Disable / Delete** (no "Add").
- Each row provides a 6-dot drag handle (**⋮⋮**) on the left side, used to adjust the order of tags in the tree.
- The level-1 tag row provides a dropdown arrow (**▼**) on the left side, used to expand / collapse the sub-tag list.

### Data List

The page displays the tag list in a tree structure, with a 4-column table: **Category Name / Creation Time / Status / Actions**. Each row contains the tag name (with parent-child indentation), creation time, status badge (● Available / Unavailable), and action column.

## Operations

### Adding a Tag

1. Enter the platform homepage, click the **"Settings > Tags"** menu in the left navigation bar to enter the tag management page (English title **Tags**).
2. The page top **"Tag Type"** tab currently shows the **Model** type; click the **"Add Tag"** button (purple button at the top right of the page) to pop up the **"Add Tag"** configuration window.

![Tags](./images/tags-list.png)

3. Fill in the **"Code"** in the popup (e.g., `text_generation`, the unique identifier of the tag).
4. Configure the name in the **"Tag Name"** card (marked "Multilingual"):
   - The top prompts "Currently editing: English" (highlighting the currently editing language tab);
   - The **"English"** / **"Simplified Chinese"** two tabs switch, with the current tab highlighted in purple;
   - Fill in the name for the corresponding language in the **"\* Name"** required input box (e.g., fill in `Text Generation` under the English tab; switch to the "Simplified Chinese" tab and fill in `文本生成`).
5. Fill in supplementary information in the **"Remarks"** input box (single field, not multilingual) (e.g., `Please enter remarks`, optional).
6. Click the **"Confirm"** button at the bottom right of the popup (primary button, highlighted in purple) to complete the addition; to discard, click **"Cancel"**.

![Add Tag](./images/add-tag.png)

#### Parameters

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Code | Text | `text_generation` | Required. The unique identifier of the tag (recommended to keep stable after saving) |
| Tag Name (Multilingual) | Multilingual Text | English `Text Generation` / Simplified Chinese `文本生成` | **Required**. Must be configured under the "English" and "Simplified Chinese" tabs respectively. The top prompt "Currently editing: English" indicates the language currently being edited |
| Remarks | Text | `Description text` | Optional. Supplementary description information for the tag (**single field**, not multilingual) |

## Other Operations

| Operation | Steps |
|-----------|-------|
| Tag Type Switching | Click the **"Model"** tab at the top of the page (the only type currently) → Switch to the corresponding type's tag list |
| Filter and Search | Filter via the top **Status** tabs (**All** / Available / Unavailable) + **Name** input box; click the **"Search"** button to apply filters, and the **"Reset"** button to clear filter conditions |
| Add Level-1 Tag | Click the **"Add Tag"** button at the top right of the page → Fill in the code + name + remarks in the popup → Click **"Confirm"** |
| Add Sub-tag | In the **"Actions"** column of a level-1 tag row, click the **"Add"** button → The same "Add Tag" popup as the level-1 tag pops up → Fill in and submit |
| Edit Tag | Click the target tag's **"Edit"** button → Modify the code / multilingual name / remarks in the popup → Click **"Confirm"** |
| Enable / Disable | Click the target tag's **"Disable"** / **"Enable"** button → Toggle the tag's availability status (**Available** ↔ **Unavailable**) |
| Delete Tag | Click the target tag's **"Delete"** button → **This action is irreversible. Please operate with caution.** |
| Drag to Reorder | Use the 6-dot drag handle (**⋮⋮**) on the left side of each row to adjust the order of tags in the tree (**This operation may have differences in multilingual environments**) |
| Expand / Collapse | Click the dropdown arrow (**▼**) on the left side of a level-1 tag row → Expand or collapse its sub-tag list |

## Notes

- **Code Stability**: The code field is the unique identifier of the tag. It is recommended **not to modify** it after saving, otherwise it may affect models that already use the tag.
- **Multilingual Switching**: In the "Add Tag" popup, the "Tag Name" is a **multilingual field** and must be filled in the corresponding language under the "English" and "Simplified Chinese" tabs; the top prompt "Currently editing: English" indicates the language currently being edited.
- **Remarks are not multilingual**: Unlike the "Tag Name", the "Remarks" field is a **single-language field** with no tab switch; for multilingual remarks, manually concatenate them in the text.
- **Multi-level Tree Structure**: Tags support a level-1 + sub-level structure. The Actions column of a level-1 tag contains 4 operations: **Edit / Add / Disable / Delete** ("Add" is used to add sub-tags); the Actions column of a sub-tag only has 3 operations: **Edit / Disable / Delete** (no "Add").
- **Drag to Reorder**: The 6-dot handle (**⋮⋮**) on the left side of each row can be used to adjust the order of tags in the tree; ordering may differ in multilingual environments.
- **Status Field**: Tag statuses are **Available** (green badge ●) / **Unavailable**; disabled tags are not selectable when adding models.
- **Deletion operations are irreversible.** Please operate with caution.
