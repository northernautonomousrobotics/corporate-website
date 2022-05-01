import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Groupe CARVI`,
    description: ``,
    author: `Vincent PORTA-SCARTA`,
    siteUrl: `https://www.groupecarvi.com`,
    menuLinks: [
      {
        name: "Accueil",
        link: "/"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
