import React from "react";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import Grow from "@material-ui/core/Grow";
import { Grid, Card, Typography, Paper, Button } from "@material-ui/core";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "zachlamb.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout pageStyle={"aboutPage"}>
        <Grid container direction="column">
          <Grid item className="image-avatar">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt={"Picture of Zach Lamb"}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" component="h4">
              An engineer with a soft spot for UX
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    )}
  />
);
