// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// In GitHub Actions these are set automatically, so the site deploys without editing this file.
// Locally they fall back to the placeholders below.
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'shayanfarrukh';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'taskly-docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Taskly API Docs (Sample)',
  tagline: 'A sample developer documentation site for a fictional REST API',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  url: `https://${owner}.github.io`,
  baseUrl: `/${repo}/`,
  organizationName: owner,
  projectName: repo,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          taskly: {
            specPath: 'openapi/openapi.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {groupPathsBy: 'tag'},
          },
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      announcementBar: {
        id: 'sample_notice',
        content:
          'Sample project: Taskly is a fictional API created to demonstrate technical writing. It is not a real product or employer work.',
        isCloseable: false,
      },
      navbar: {
        title: 'Taskly API Docs',
        logo: {alt: 'Taskly logo', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
          {to: '/about', label: 'About this project', position: 'left'},
          {
            href: `https://github.com/${owner}/${repo}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Sample documentation by Shayan Farrukh. Taskly is fictional. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'python', 'json', 'yaml'],
      },
    }),
};

export default config;
