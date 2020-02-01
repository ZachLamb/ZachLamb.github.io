module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,s
  ],
  siteMetadata: {
    title: "Zach Lamb",
    titleTemplate: "%s · Front-End Dev and user advocate",
    description:
      "Zach Lamb is a front-end dev who loves UX, accesibility, diversity, and occassionally dabbles in the backend",
    url: "https://www.zachlamb.io", // No trailing slash allowed!
    image: "/images/zachlamb.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ozachlambchops",
  },
};