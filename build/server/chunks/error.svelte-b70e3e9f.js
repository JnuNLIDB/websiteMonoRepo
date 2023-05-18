import { c as create_ssr_component, a as subscribe, e as escape } from './index3-75d1bdbb.js';
import { p as page } from './stores-39db615e.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-b70e3e9f.js.map
