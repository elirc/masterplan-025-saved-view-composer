# Verification record

[Overview](../README.md) · [Machine-readable evidence](verification.json)

Local reference checks ran on 2026-10-03 with **Node v22.16.0**. The machine-readable record contains the captured output rather than an invented transcript.

## Executable checks

Command: `node --test`. Exit code: **0**. 5 tests passed.

Re-run from this repository with `npm test`. M024–M025 require npm ci first and also provide npm run build; npm start builds automatically. package-lock.json records the dependency graph. The local preview can be started with npm start.

## Browser evidence

- No document horizontal overflow at 1200, 800, 500 and 320 CSS pixels
- First Tab reveals skip link; Enter focuses main
- Actual React bundle: item change recomputes results; duplicate view labels get distinct IDs; rename preserves ID; removed category warns with zero results

These checks ran in installed Microsoft Edge through a browser automation harness. No JavaScript page errors were observed. A representative screenshot is saved in images/preview.png. The harness was run from the parent workspace; the reproduction checklist below can be performed without installing that harness.

## Reproduce the important observation yourself

Run npm ci and npm start. Add an item to the initial js view, create a duplicate-labeled view, rename by active ID, then select the original view and remove js. Verify recomputation, identity preservation and the broken-category warning.

Record viewport, input, expected result and actual result. For interaction failures, verify that correcting the input produces a normal result and does not leave stale error styling or stale output. For a layout failure, distinguish document overflow from an intentionally scrollable table region.

## Limits

These observations cover the listed fixtures and one installed browser. They are not a full cross-browser, accessibility, production-security or performance audit. There is no real external service to validate. CI checks executable logic and local asset references; the React builds also install the lockfile and compile JSX. The recorded browser observations remain separate evidence. New stories require new evidence after your changes.

The GitHub Actions workflow runs `npm test` on push and pull request. Its configuration is included; an actual remote success must be verified on GitHub separately. Do not infer it merely from this local report.
