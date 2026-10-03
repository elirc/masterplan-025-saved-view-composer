# M025: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain normalized data through this project

Separate collections for distinct entities instead of copied overlapping records.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain stable view identity through this project

A key that survives label edits and duplicate names.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain live derivation through this project

Recomputing results from the current collection and definition.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain broken reference through this project

A saved definition pointing to unavailable category data.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: Active JavaScript view, add a JavaScript item

Visible count grows without editing the view

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Two views both named JavaScript shelf

Distinct IDs make both selectable

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Remove js category with js view active

Warning and zero visible results, not silent all-category fallback

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** What user expectation distinguishes a saved filter from a saved report snapshot?

A saved view expresses how to select current data. Copying the current matching items into the view would freeze an accidental snapshot and miss later additions. The reference keeps item records and view definitions separate, then composes them during rendering. This is a different product from a historical snapshot, which would need its own name and contract.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Why would renaming a label be dangerous if the label were also the storage key?

People may choose the same display name twice. The select menu includes IDs so duplicate labels remain distinguishable, and renameView looks up the stable ID. The reference favors visible full IDs for teaching clarity; a future product could present shorter disambiguators without replacing the underlying identity.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** When would automatically converting the category to all surprise the user?

Removing a category can invalidate a definition even when its item records still exist. The reference keeps the definition and shows a warning with no results. This differs intentionally from M018's permissive URL fallback: a saved user definition should not silently broaden its meaning. The difference belongs in the contract.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** Why should a saved view store a query instead of a stale copy of matching items?

A saved view is a reusable question about current items. Storing the answer would create a snapshot with different semantics. Keep view identity separate from its name, and make missing references visible rather than silently broadening a saved filter. A rename changes presentation; an item addition changes derived results; neither should require rewriting every view.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a duplicate-view action

**First hint:** The desired improvement is “Copy a definition while creating a new identity.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Generate a new ID; copy filter fields; choose a new or duplicate label deliberately.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Editing or renaming the copy does not alter the original definition.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the default copied label. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a no-results explanation

**First hint:** The desired improvement is “Distinguish valid empty results from a broken category.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Inspect composeView warning separately from item count; render different messages; keep the active definition visible.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: An unmatched query is not described as a removed category.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose recovery suggestions for each state. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add an item-title editor

**First hint:** The desired improvement is “Verify saved views respond to changed source data.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Update one item immutably by ID; keep view definitions untouched; recompute the active result.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Renaming an item can add or remove it from a query result immediately.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the editing interaction. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a saved-view summary

**First hint:** The desired improvement is “Explain each definition in ordinary language.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive query and category descriptions; include stable identity when labels collide; avoid storing another summary field.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Renaming changes only the name while filter meaning remains the same.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose empty-query wording. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a category restoration action

**First hint:** The desired improvement is “Show recovery of a previously broken definition.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Reintroduce the category without rewriting views; derive the active result again; retain item identities.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A restored category makes its original saved view usable again.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how restored categories are ordered. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a view-definition export

**First hint:** The desired improvement is “Share filter intent as data.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Serialize supported fields and a schema version; omit copied result items; document session-only source data limits.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Export describes the question rather than freezing its current answer.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a compact versioned shape. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a selection reset policy

**First hint:** The desired improvement is “Handle an absent active view ID explicitly.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Supply a missing-ID fixture; choose empty state or a known fallback; keep behavior in one owner.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: No stale definition remains displayed for an ID that no longer exists.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the fallback rule. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add a duplicate-name indicator

**First hint:** The desired improvement is “Make label collisions easier to scan.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Count labels from views; derive a textual duplicate marker; keep IDs as actual keys.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Removing or renaming one duplicate updates markers without changing identities.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether comparison is case-sensitive. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Compare snapshots with live views

**First hint:** The desired improvement is “Teach two legitimate products with different contracts.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Build a separate scratch snapshot object; add a matching item afterward; contrast frozen and recomputed results.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The explanation names which product the reference implements and does not mix their promises.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a scenario where a historical snapshot is useful. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
