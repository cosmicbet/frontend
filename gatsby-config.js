module.exports = {
  siteMetadata: {
    title: "cosmic.bet",
    siteUrl: "https://cosmic.bet",
    githubLedger: "https://github.com/cosmicbet/ledger",
    contacts: {
      github: "https://github.com/cosmicbet",
      telegram: "https://t.me/itastakers",
      discord: "https://discord.gg/aUh8Vkwy4u",
    },
  },
  pathPrefix: "__GATSBY_IPFS_PATH_PREFIX__",
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "REPLACEME",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-ipfs",
  ],
};
