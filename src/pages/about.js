import React from "react";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import Grow from "@material-ui/core/Grow";
import { Grid, Card, Typography, Paper, Button } from "@material-ui/core";
import Img from "gatsby-image";

import "../styles/main.scss";
import RadarReactChart from "../components/RadarReactChart";

export default ({ data }) => (
  <Layout pageStyle={"aboutPage"}>
    <Grid container className="page-container elevator-cards">
      <Grid container direction="row" alignContent="center" className="aboutTitle">
        <Typography variant="h1" component="h1">
        Hi, I'm Zach
        </Typography>
      </Grid>
      <Grid container direction="row" spacing={40} justify="center">
        <Grow in timeout={2000}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <CardLayout
              title={"An engineer who loves UX"}
              containsBodyText={true}
              cardClass={"aboutCard"}
              button={"Add me on LinkedIn"}
              buttonLink={"https://www.linkedin.com/in/lambzachary/"}
            >
             I love people, tech, dogs, and the outdoors in that order. I have been developing web apps for the past two years and a half years. I love having 
             I'm a proud alumn of CU Boulder. In school, I helped organize a hackathon called T9 Hacks ,and I was president of a student organization while I was there.
            </CardLayout>
          </Grid>
        </Grow>
        <Grid item xl={6} lg={6} md={6} className="about-chart">
          <RadarReactChart></RadarReactChart>
        </Grid>
      </Grid>
    </Grid>
  </Layout>
);

export const aboutImage = graphql`
  fragment aboutImage on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    loveDogs: file(relativePath: { eq: "loveDogs.jpeg" }) {
      ...aboutImage
    }
    glacier: file(relativePath: { eq: "glacier.jpg" }) {
      ...aboutImage
    }
    ourayBeer: file(relativePath: { eq: "ourayBeer.jpeg" }) {
      ...aboutImage
    }
    telluride: file(relativePath: { eq: "telluride.jpg" }) {
      ...aboutImage
    }
  }
`;
