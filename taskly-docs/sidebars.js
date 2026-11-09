const apiSidebar = require('./docs/api/sidebar.ts');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    'quickstart',
    'authentication',
    'errors',
    'webhooks',
    {
      type: 'category',
      label: 'API Reference',
      link: {type: 'generated-index', title: 'API Reference', slug: '/category/api'},
      items: apiSidebar.default ?? apiSidebar,
    },
    'changelog',
  ],
};

module.exports = sidebars;
