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
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
  ],
  siteMetadata: {
    title: "Zach Lamb",
    titleTemplate: "%s · Front-End Dev and user advocate",
    description:
      "Zach Lamb is a Seattle based front-end dev with UX design skills, accesibility skills, UX Design skills, and occassionally dabbles in the backend",
    url: "https://www.zachlamb.io", // No trailing slash allowed!
    image: "/images/zachlamb.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@zachlambchops",
  },
};