import React from "react";
import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import ProgressLayout from "../components/progressLayout";
import "../styles/main.scss";

import Grow from "@material-ui/core/Grow";
import { graphql } from "gatsby";
import { Grid, Card, Typography } from "@material-ui/core";


export default ({ data }) => (
  <Layout headshotImg={data.file.childImageSharp.fluid}>
    <Grid
      container
      alignItems="center"
      className="page-container elevator-cards"
      justify="space-around"
    > </Grid>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "zachlamb.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
