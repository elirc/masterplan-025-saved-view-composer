# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Edit an existing view definition

**Hint 1 — ownership:** Begin from the `views` state and `renameView`. Add an explicit edit mode keyed by view ID, with draft fields separate from the active saved definition.

**Hint 2 — reasoning:** Revisit the decision “Separate label from identity”. Ask yourself: Why would renaming a label be dangerous if the label were also the storage key?

**Answer direction:** A defensible solution demonstrates this observable result: Cancel preserves the old filter; save updates that ID without creating a duplicate view. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Delete a saved view

**Hint 1 — ownership:** Begin from `activeId` and the `!view` branch of `composeView`. Choose a fallback active ID or an empty state when removing the current definition.

**Hint 2 — reasoning:** Revisit the decision “Make broken references visible”. Ask yourself: When would automatically converting the category to all surprise the user?

**Answer direction:** A defensible solution demonstrates this observable result: Deleting active, inactive and final views leaves no misleading stale result. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Add a sort rule to definitions

**Hint 1 — ownership:** Begin from the view object created by `createView` and read by `composeView`. Store a small allowlisted sort setting and derive sorted results from current items.

**Hint 2 — reasoning:** Revisit the decision “Save definitions rather than query results”. Ask yourself: What user expectation distinguishes a saved filter from a saved report snapshot?

**Answer direction:** A defensible solution demonstrates this observable result: Later additions appear in the correct order and original items are not sorted in place. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Repair a removed category reference

**Hint 1 — ownership:** Begin from the removed-category branch of `composeView`. Offer an explicit action to choose a remaining category or all for the broken definition.

**Hint 2 — reasoning:** Revisit the decision “Make broken references visible”. Ask yourself: When would automatically converting the category to all surprise the user?

**Answer direction:** A defensible solution demonstrates this observable result: The view changes only after user action; the warning disappears and ID/name remain stable. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Show counts beside saved views

**Hint 1 — ownership:** Begin from `composeView`, called once per saved view. Derive current counts per definition without caching copied result arrays in state.

**Hint 2 — reasoning:** Revisit the decision “Save definitions rather than query results”. Ask yourself: What user expectation distinguishes a saved filter from a saved report snapshot?

**Answer direction:** A defensible solution demonstrates this observable result: Adding an item updates relevant counts, including duplicate-labeled views with different queries. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Persist definitions in a later branch

**Hint 1 — ownership:** Begin from the `views` state in `src/App.jsx`. Reuse the guarded adapter ideas from M019 for a versioned saved-view record, keeping source items as fixtures.

**Hint 2 — reasoning:** Revisit the decision “Save definitions rather than query results”. Ask yourself: What user expectation distinguishes a saved filter from a saved report snapshot?

**Answer direction:** A defensible solution demonstrates this observable result: Malformed saved definitions are preserved for recovery and unsupported categories remain explicit after reload. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Save form → validate a new definition with a generated unique ID → append definition → select its ID → composeView filters current items. Add an item → update items only → the same definition recomputes results. Rename → update label by ID → keep filter and active identity unchanged.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
