// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Physical AI Humanoid Robotics Course",
  tagline:
    "Build, train, and deploy the next generation of intelligent humanoid robots.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // Corrected for Vercel deployment
  url: "https://your-vercel-project.vercel.app", // Replace with your actual Vercel URL
  baseUrl: "/",
  trailingSlash: true,

  organizationName: "AlishbaBasharat", 
  projectName: "Physical-AI-Humanoid-Robotics-Book", 
  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Optional: point to GitHub repo if you want edit links
          editUrl: "https://github.com/AlishbaBasharat/Physical-AI-Humanoid-Robotics-Book/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/AlishbaBasharat/Physical-AI-Humanoid-Robotics-Book/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: ({
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Physical AI Humanoid Robotics",
      items: [
        {
          type: "doc",
          docId: "module-1-ros2/ros2-basics",
          position: "left",
          label: "Course Modules",
        },
        {
          href: "https://github.com/AlishbaBasharat",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Course Modules",
              to: "/docs/module-1-ros2/ros2-basics",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/alishba-basharat-1a4401302/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/AlishbaBasharat",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. AI Humanoid Robotics Book. Built By Alishba Basharat.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
