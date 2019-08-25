import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import ProgressLayout from "../components/progressLayout";
import Grow from "@material-ui/core/Grow";
import { Grid, Card, Typography } from "@material-ui/core";

import "../styles/main.scss";
import SEO from "../components/SEO";
import PieChart from "../components/PieChart";

export default ({ data }) => (
  <Layout headshotImg={data.file.childImageSharp.fluid}>
    <SEO></SEO>
    <Grid
      container
      alignItems="center"
      className="page-container elevator-cards"
      justify="space-evenly"
    >
      <PieChart />
    </Grid>
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