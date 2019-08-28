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
    titleTemplate: "%s · Front-End Dev and user advocate",
    description:
      "Zach Lamb is a front-end dev who loves UX, accesibility, diversity, and occassionally dabbles in the backend",
    url: "https://www.zachlamb.io", // No trailing slash allowed!
    image: "/images/zachlamb.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ozachlambchops",
  },
  resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-92460709-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
};
