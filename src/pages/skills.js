import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/mainLayout";
import { Grid, } from "@material-ui/core";

import "../styles/main.scss";
import SEO from "../components/SEO";
import RBChart from "../components/RBChart";
const languages = [
  {
    name: "JS",
    value: 9,
    fill: "#86a3d1"
  },
  {
    name: "HTML",
    value: 6,
    fill: "#343f52"
  },
  {
    name: "CSS",
    value: 8,
    fill: "#4a81d9"
  },
  {
    name: "Python",
    value: 3,
    fill: "#1c3052"
  },
  {
    name: "Java",
    value: 2,
    fill: "#657b9e"
  }
];

export default ({ data }) => (
  <Layout headshotImg={data.file.childImageSharp.fluid}>
    <SEO></SEO>
    <Grid
      container
      className="page-container"
      justify="space-evenly"
      alignItems="center"
    >
          <RBChart data={languages} />
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
