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
