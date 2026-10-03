import React, { useState } from 'react';
import { initialItems, composeView, createView, renameView } from '../public/core.js';

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [categories, setCategories] = useState(['js', 'css']);
  const [views, setViews] = useState([{ id: 'v1', name: 'JavaScript shelf', query: '', category: 'js' }]);
  const [activeId, setActiveId] = useState('v1');
  const [name, setName] = useState('My view');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [rename, setRename] = useState('');
  const [message, setMessage] = useState('Definitions are saved in memory for this session. Reload resets the fixture.');
  const active = views.find(view => view.id === activeId);
  const result = composeView(items, active, categories);
  function save(event) {
    event.preventDefault();
    try {
      const id = crypto.randomUUID();
      setViews(createView(views, { id, name, query, category }, categories)); setActiveId(id);
      setMessage('View definition saved. Results are calculated from current items.');
    } catch (error) { setMessage(error.message); }
  }
  function renameActive(event) {
    event.preventDefault();
    try { setViews(renameView(views, activeId, rename)); setMessage('Label changed; identity and filter kept.'); }
    catch (error) { setMessage(error.message); }
  }
  return <>
    <h2>Save a filter, not a result snapshot</h2>
    <form onSubmit={save}>
      <label htmlFor="name">View name (duplicates allowed)</label><input id="name" value={name} onChange={e => setName(e.target.value)} />
      <label htmlFor="query">Title contains</label><input id="query" value={query} onChange={e => setQuery(e.target.value)} />
      <label htmlFor="category">Category</label><select id="category" value={category} onChange={e => setCategory(e.target.value)}><option value="all">All</option>{categories.map(value => <option key={value} value={value}>{value}</option>)}</select>
      <button>Save new view</button>
    </form>
    <label htmlFor="active">Active saved definition</label><select id="active" value={activeId} onChange={e => setActiveId(e.target.value)}>{views.map(view => <option key={view.id} value={view.id}>{view.name} [{view.id}]</option>)}</select>
    <form onSubmit={renameActive}><label htmlFor="rename">New label for active view</label><input id="rename" value={rename} onChange={e => setRename(e.target.value)} /><button>Rename active view</button></form>
    <button id="add" onClick={() => setItems(current => [...current, { id: crypto.randomUUID(), title: 'New JavaScript note', category: 'js' }])}>Add JavaScript item</button>
    <button id="remove-category" disabled={!categories.includes('js')} onClick={() => { setCategories(current => current.filter(x => x !== 'js')); setCategory('all'); }}>Remove JavaScript category</button>
    <p id="warning" role="status">{result.warning}</p>
    <ul id="items">{result.items.map(item => <li key={item.id}>{item.title}</li>)}</ul>
    <output id="result" aria-live="polite">{result.items.length} visible / {items.length} total; {views.length} saved views. {message}</output>
    <pre id="definition">{JSON.stringify(active, null, 2)}</pre>
  </>;
}
