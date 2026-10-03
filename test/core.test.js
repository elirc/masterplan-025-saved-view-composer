import test from 'node:test';
import assert from 'node:assert/strict';

import { initialItems, composeView, createView, renameView } from '../public/core.js';
const categories = ['js', 'css'];
const view = { id: 'v1', name: 'Shelf', query: '', category: 'js' };
test('saved definition recomputes after item data changes', () => {
  assert.equal(composeView(initialItems, view, categories).items.length, 2);
  assert.equal(composeView([...initialItems, { id: 'd', title: 'New', category: 'js' }], view, categories).items.length, 3);
});
test('missing categories produce a warning and zero results', () => {
  const result = composeView(initialItems, view, ['css']); assert.equal(result.items.length, 0); assert.match(result.warning, /removed category/);
});
test('duplicate labels are allowed but duplicate identities are rejected', () => {
  const next = createView([view], { ...view, id: 'v2' }, categories); assert.equal(next.length, 2);
  assert.throws(() => createView([view], view, categories));
});
test('rename preserves identity, query, category and other definitions', () => {
  const original = [view, { ...view, id: 'v2' }]; const next = renameView(original, 'v1', 'New label');
  assert.deepEqual(next[0], { ...view, name: 'New label' }); assert.equal(next[1], original[1]); assert.equal(view.name, 'Shelf');
});
test('blank names and unknown categories fail; search and category combine', () => {
  assert.throws(() => renameView([view], 'v1', ' ')); assert.throws(() => createView([], { ...view, category: 'gone' }, categories));
  assert.deepEqual(composeView(initialItems, { ...view, query: 'CALL' }, categories).items.map(x => x.id), ['c']);
});
