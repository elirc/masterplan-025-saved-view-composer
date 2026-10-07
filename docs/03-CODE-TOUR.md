# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [src/App.jsx](../src/App.jsx) | React state, components and event handlers. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |
| [src/main.jsx](../src/main.jsx) | Mounts the React component tree. |
| [tools/build.mjs](../tools/build.mjs) | Bundles authored JSX and npm imports for the local browser. |
| [package-lock.json](../package-lock.json) | Pins the installed dependency graph for npm ci. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `composeView`. Use this trace as a map: Save form → validate a new definition with a generated unique ID → append definition → select its ID → composeView filters current items. Add an item → update items only → the same definition recomputes results. Rename → update label by ID → keep filter and active identity unchanged.

The tooling is intentionally separate from the product concept. You can study the local server, build step or CI after the main rule is clear. None of them should become a prerequisite for understanding a small pure function.

## Decision: Save definitions rather than query results

A saved view expresses how to select current data. Copying the current matching items into the view would freeze an accidental snapshot and miss later additions. The reference keeps item records and view definitions separate, then composes them during rendering. This is a different product from a historical snapshot, which would need its own name and contract.

**Review question:** What user expectation distinguishes a saved filter from a saved report snapshot?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Separate label from identity

People may choose the same display name twice. The select menu includes IDs so duplicate labels remain distinguishable, and renameView looks up the stable ID. The reference favors visible full IDs for teaching clarity; a future product could present shorter disambiguators without replacing the underlying identity.

**Review question:** Why would renaming a label be dangerous if the label were also the storage key?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Make broken references visible

Removing a category can invalidate a definition even when its item records still exist. The reference keeps the definition and shows a warning with no results. This differs intentionally from M018's permissive URL fallback: a saved user definition should not silently broaden its meaning. The difference belongs in the contract.

**Review question:** When would automatically converting the category to all surprise the user?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core (`public/core.js`), state, wording and interaction in the components (`src/App.jsx`), and layout in the relevant CSS rule.

If a story crosses two files, say why. A new option may require the core contract, a component and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

Persistence and frameworks are explicit where used: M019 saves a namespaced local draft; M024–M025 introduce React. The remaining builds use plain JavaScript and local data. M025 saved definitions last for the current session only. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
