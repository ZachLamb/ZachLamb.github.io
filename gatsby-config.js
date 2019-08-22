module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }
  ],
  siteMetadata: {
    title: "Zach Lamb",
    titleTemplate: "%s · Front-End Dev who loves UX and diversity",
    description:
      "Zach Lamb is a front-end dev who loves UX and occassionally dabbles in the backend",
    url: "https://www.zachlamb.io", // No trailing slash allowed!
    image: "/images/zachlamb.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ozachlambchops",
  },
};
