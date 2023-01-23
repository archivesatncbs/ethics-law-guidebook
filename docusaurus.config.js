// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Archives, Ethics and the Law in India',
  tagline: 'A Guidebook for Archivists in India',
  url: 'https://archivesethics.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_archives_ncbs.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'archivesethics', // Usually your GitHub org/user name.
  projectName: 'archivesethics.github.io', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  // headTags: [

  //   {

  //     tagName: 'title'
  //     attributes :

  //   }

  // ],

  plugins: [
              [
                require.resolve("@cmfcmf/docusaurus-search-local"),
                {

                      indexDocs: true,


                },
              ],
          ],



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      
    
      {

        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
        },

      navbar: {
        title: ' ',
        logo: {
          alt: 'logo_archives_ncbs',
          src: 'img/logo_archives_ncbs.svg',
        },
        items: [

          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'About',
          },

          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guidebook',
          },

          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },

          {
//             href: require.resolve('/pdf/2022-12-24-guidebook.pdf'),
            href: 'https://archives.ncbs.res.in/sites/default/files/2023-01-22-guidebook.pdf',
            // href: '/pdf/2023-01-15-guidebook.pdf',
            target: '_blank',
            label: 'Download PDF',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // label:'Creative Commons License - CC BY-NC-SA 4.0',
            // href:'https://creativecommons.org/licenses/by-nc-sa/4.0/',
          
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Archives_NCBS',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/archives_ncbs',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/archives.at.NCBS',
              },
            ],
          },
          {
            title: 'Copyright',
            items: [
              {
                label: 'Creative Commons License - CC BY-NC-SA 4.0',
                href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
              },
              // {
                // label: 'GitHub',
                // href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        // copyright: '',
        // copyright: `Copyright © ${new Date().getFullYear()}.`,
        copyright: `All logos and branding are the property of their respective copyright owners`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }
    
    
    ),
};

module.exports = config;
