// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "Codec Wiki",
  tagline: "Your Guide to All Things Encoding",
  favicon: "img/favicon.svg",
  
  // preload fonts
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Inter.var.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Mona-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Monaspace-Neon.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],

  // Set the production url of your site here
  url: "https://codecs.wiki",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: "codec-wiki", // Usually your repo name.
  organizationName: "av1-community-contributors", // Usually your GitHub org/user name.
  deploymentBranch: "deployment",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/av1-community-contributors/codec-wiki/tree/main",
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    "plugin-image-zoom",
    "@easyops-cn/docusaurus-search-local",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/codec-wiki-social-card.webp",
      navbar: {
        items: [
          {
            to: "docs/introduction/prologue",
            activeBasePath: "docs/introduction/prologue",
            label: "Get Started",
            position: "left",
          },
          { to: "blog", label: "Blog", position: "left" },
          {
            href: "https://discord.gg/bbQD5MjDr3",
            className: "header-discord-link",
            "aria-label": "Discord",
            position: "right",
          },
          {
            href:
              "https://github.com/av1-community-contributors/codec-wiki/tree/main",
            className: "header-github-link",
            "aria-label": "GitHub",
            position: "right",
          },
        ],
        title: "Codec Wiki",
        logo: {
          alt: 'AV1 "Stonks" logo',
          src: "img/favicon.svg",
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        // prism v2 ships with less lang than v1, so they need to be manually added
        additionalLanguages: ["bash", "diff", "json", "java", "latex"],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Getting Started",
            items: [
              {
                label: "Prologue",
                to: "https://codecs.wiki/docs/introduction/prologue",
              },
              {
                label: "AAC",
                to: "https://codecs.wiki/docs/audio/AAC",
              },
            ],
          },
          {
            title: "Filtering",
            items: [
              {
                label: "Vapoursynth",
                href: "https://codecs.wiki/docs/filtering/vapoursynth",
              },
              {
                label: "Deband",
                href: "https://codecs.wiki/docs/filtering/deband",
              },
              {
                label: "Denoise",
                href: "https://codecs.wiki/docs/filtering/denoise",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Contribute",
                href:
                  "https://github.com/av1-community-contributors/codec-wiki/tree/main",
              },
              {
                label: "Terms of Use",
                href: "https://codecs.wiki/docs/terms-of-use",
              },
              {
                label: "Privacy Policy",
                href: "https://codecs.wiki/docs/privacy-policy",
              },
            ],
          },
        ],
        copyright:
          `Copyright © ${new Date().getFullYear()} Gianni Rosato & contributors. Content licensed under CC BY-SA 4.0. Built with Docusaurus.`,
      },
      zoom: {
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),
};

export default {
  markdown: {
    format: "mdx",
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent.replaceAll("{{MY_VAR}}", "MY_VALUE");
    },
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: true,
    },
  },
};

module.exports = config;
