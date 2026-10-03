# Your independent variation

Read [the six practice stories](../docs/05-PRACTICE-STORIES.md), choose one, and create a branch with `git switch -c practice/story-01`.

Before code, record the expected behavior, one boundary input and a design decision in your own ignored `my-journal/` folder. Use [the template](../docs/JOURNAL-TEMPLATE.md). Keep main as the working reference. The shipped tests verify the reference; they do not mean your chosen story is already complete.

Start with **Edit an existing view definition**. Add an explicit edit mode keyed by view ID, with draft fields separate from the active saved definition.

Acceptance: Cancel preserves the old filter; save updates that ID without creating a duplicate view.

Do not copy an answer before trying. After your first attempt, use [the hints](../docs/06-HINTS-AND-ANSWERS.md), then ask for a review with a concrete diff and observed result.
