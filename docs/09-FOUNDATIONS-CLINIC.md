# M025: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

A saved view is a reusable question about current items. Storing the answer would create a snapshot with different semantics. Keep view identity separate from its name, and make missing references visible rather than silently broadening a saved filter. A rename changes presentation; an item addition changes derived results; neither should require rewriting every view.

## Start from one visible behavior

Read this contract slowly: Items, category choices and saved filter definitions are separate in-memory data. Each saved view has a stable ID, label, query and category; duplicate labels are allowed but duplicate IDs are not. Renaming changes only the label. Results are derived from current items and the active definition, so newly added matching items appear immediately. A removed category produces a warning and zero results for affected views. Reload resets this session-only reference.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Normalized data

Separate collections for distinct entities instead of copied overlapping records.

**Small experiment:** Draw items and view definitions in different boxes.

Find the part of `composeView` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **normalized data** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Draw items and view definitions in different boxes.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Stable view identity

A key that survives label edits and duplicate names.

**Small experiment:** Rename only the second of two same-name views.

Find the part of `composeView` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **stable view identity** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Rename only the second of two same-name views.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Live derivation

Recomputing results from the current collection and definition.

**Small experiment:** Add a matching item without changing the view.

Find the part of `composeView` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **live derivation** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Add a matching item without changing the view.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Broken reference

A saved definition pointing to unavailable category data.

**Small experiment:** Explain why M025 warns instead of borrowing M018's permissive fallback.

Find the part of `composeView` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **broken reference** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Explain why M025 warns instead of borrowing M018's permissive fallback.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
export const initialItems = [
  { id: 'a', title: 'Objects', category: 'js' },
  { id: 'b', title: 'Layout', category: 'css' },
  { id: 'c', title: 'Callbacks', category: 'js' },
];
export function composeView(items, view, categories) {
  if (!view) return { items: [], warning: 'Select a saved view.' };
  if (view.category !== 'all' && !categories.includes(view.category)) return { items: [], warning: 'This view references a removed category. Edit the definition or choose another view.' };
  return { items: items.filter(item => (view.category === 'all' || item.category === view.category) && item.title.toLowerCase().includes(view.query.toLowerCase())), warning: '' };
}
export function createView(views, { id, name, query, category }, categories) {
  if (typeof id !== 'string' || !id || views.some(view => view.id === id)) throw new TypeError('View ID must be unique.');
  if (typeof name !== 'string' || !name.trim() || typeof query !== 'string' || (category !== 'all' && !categories.includes(category))) throw new TypeError('Provide a name, search text and known category.');
  return [...views, { id, name: name.trim(), query, category }];
}
export function renameView(views, id, name) {
  if (typeof name !== 'string' || !name.trim()) throw new TypeError('A name is required.');
  if (!views.some(view => view.id === id)) throw new TypeError('View not found.');
  return views.map(view => view.id === id ? { ...view, name: name.trim() } : view);
}
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `composeView`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
