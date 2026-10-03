# Build journal: Saved View Composer

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

An organizer wants named views of a reading queue without duplicating the underlying items.

The main temptation was to make the project larger than its learning target. The useful boundary is **state composition and normalized data**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Items, category choices and saved filter definitions are separate in-memory data. Each saved view has a stable ID, label, query and category; duplicate labels are allowed but duplicate IDs are not. Renaming changes only the label. Results are derived from current items and the active definition, so newly added matching items appear immediately. A removed category produces a warning and zero results for affected views. Reload resets this session-only reference.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Save definitions rather than query results

A saved view expresses how to select current data. Copying the current matching items into the view would freeze an accidental snapshot and miss later additions. The reference keeps item records and view definitions separate, then composes them during rendering. This is a different product from a historical snapshot, which would need its own name and contract.

**What a learner should challenge:** What user expectation distinguishes a saved filter from a saved report snapshot?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Separate label from identity

People may choose the same display name twice. The select menu includes IDs so duplicate labels remain distinguishable, and renameView looks up the stable ID. The reference favors visible full IDs for teaching clarity; a future product could present shorter disambiguators without replacing the underlying identity.

**What a learner should challenge:** Why would renaming a label be dangerous if the label were also the storage key?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Make broken references visible

Removing a category can invalidate a definition even when its item records still exist. The reference keeps the definition and shows a warning with no results. This differs intentionally from M018's permissive URL fallback: a saved user definition should not silently broaden its meaning. The difference belongs in the contract.

**What a learner should challenge:** When would automatically converting the category to all surprise the user?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `composeView`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
