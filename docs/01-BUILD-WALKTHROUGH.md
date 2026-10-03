# Building Saved View Composer, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Items, category choices and saved filter definitions are separate in-memory data. Each saved view has a stable ID, label, query and category; duplicate labels are allowed but duplicate IDs are not. Renaming changes only the label. Results are derived from current items and the active definition, so newly added matching items appear immediately. A removed category produces a warning and zero results for affected views. Reload resets this session-only reference.

The smallest useful result answers this user need: An organizer wants named views of a reading queue without duplicating the underlying items. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Draw the normalized data

Make separate boxes for items, categories, views and activeId. A view contains a predicate description, not a list of copied items. Trace which box changes for save, rename, add item and remove category. A helpful architecture drawing names these changes instead of merely listing React components.

**Pause and produce evidence:** Active JavaScript view, add a JavaScript item. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Read derived composition

Find active by ID, then call composeView with current items and categories on every render. The visible list and count come from that result. No effect writes a second results array into state. This keeps a new matching item visible immediately after the item list changes.

**Pause and produce evidence:** Two views both named JavaScript shelf. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Exercise duplicate names

Create a second view with the same name as the first, inspect the different option IDs and rename only the active one. The filter fields remain unchanged. Tests check identity and object contents separately so a label-only success cannot hide an accidental category reset.

**Pause and produce evidence:** Remove js category with js view active. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Handle a removed category

Activate the original JavaScript view and remove the JavaScript category. The item collection is still present, but the definition references an unavailable category. The warning explains that relationship. The all-category view can still show existing items, which is a deliberate distinction between category availability and item deletion.

**Pause and produce evidence:** Remove js category with js view active. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose stable IDs and a rename rule.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
