# M025: deeper debugging casebook

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

The incidents below are hypothetical teaching scenarios based on realistic mistakes in this codebase. They are not claims that the shipped reference is broken. Reproduce a proposed defect only on a disposable practice branch. Keep an observed failure separate from a likely explanation; the point of an experiment is to make those two agree or disagree.

## Incident 1: Saved view never includes new matching items

**Fictional report:** A learner says, “Saved view never includes new matching items.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Store a filtered item array inside the saved view.

**Starting experiment:** Activate js and add a JavaScript item.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Items, category choices and saved filter definitions are separate in-memory data. Each saved view has a stable ID, label, query and category; duplicate labels are allowed but duplicate IDs are not. Renaming changes only the label. Results are derived from current items and the active definition, so newly added matching items appear immediately. A removed category produces a warning and zero results for affected views. Reload resets this session-only reference. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `composeView` is wrong. Hypothesis B: the rule is correct but `src/App.jsx` supplies or presents the wrong value or state. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js composeView and src/App.jsx: recompute from current items.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Saved view never includes new matching items” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 2: Renaming changes the wrong same-name view

**Fictional report:** A learner says, “Renaming changes the wrong same-name view.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Find views by label instead of ID.

**Starting experiment:** Create duplicate labels, select the second ID and rename it.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Items, category choices and saved filter definitions are separate in-memory data. Each saved view has a stable ID, label, query and category; duplicate labels are allowed but duplicate IDs are not. Renaming changes only the label. Results are derived from current items and the active definition, so newly added matching items appear immediately. A removed category produces a warning and zero results for affected views. Reload resets this session-only reference. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `composeView` is wrong. Hypothesis B: the rule is correct but `src/App.jsx` supplies or presents the wrong value or state. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js renameView: lookup must use stable identity.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Renaming changes the wrong same-name view” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 3: A missing category silently shows everything

**Fictional report:** A learner says, “A missing category silently shows everything.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Treat unknown category as all in composeView.

**Starting experiment:** Remove js while the original js view is active.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Items, category choices and saved filter definitions are separate in-memory data. Each saved view has a stable ID, label, query and category; duplicate labels are allowed but duplicate IDs are not. Renaming changes only the label. Results are derived from current items and the active definition, so newly added matching items appear immediately. A removed category produces a warning and zero results for affected views. Reload resets this session-only reference. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `composeView` is wrong. Hypothesis B: the rule is correct but `src/App.jsx` supplies or presents the wrong value or state. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js: a saved definition's broken reference needs explicit feedback.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “A missing category silently shows everything” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## When a proposed repair fails

Stop adding edits. Compare the new symptom with the old one and inspect the diff. Decide whether the experiment rejected your hypothesis or whether the repair failed to change the intended boundary. Revert only your own experimental change if needed, preserve other work, and try the next discriminating input.

## A useful help request

```text
Project: Saved View Composer; suspected owner: public/core.js / composeView.
Expected / observed: [exact difference].
Smallest reproduction: [inputs, actions and environment].
Hypothesis A predicts: [observation].
Hypothesis B predicts: [different observation].
Experiment already run and real output: [fill in].
Suggest one next experiment, not a rewrite. Separate facts from hypotheses.
```
