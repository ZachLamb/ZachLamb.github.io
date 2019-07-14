module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ]
};
exports.modifyWebpackConfig = ({config, stage}) => {
  switch(stage) {
    case 'develop':
      config._config.output.publicPath = `/`;
      break;
  }
};
