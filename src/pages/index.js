import React from "react";
import { graphql } from "gatsby";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import ProgressLayout from "../components/progressLayout";
import Grow from "@material-ui/core/Grow";
import { Grid, Card, Typography } from "@material-ui/core";
import ContactMailIcon from '@material-ui/icons/ContactMail';

import "../styles/main.scss";
import SEO from "../components/SEO";

export default ({ data }) => (
  <Layout headshotImg={data.file.childImageSharp.fluid}>
    <SEO></SEO>
    <Grid
      container
      alignItems="center"
      className="page-container elevator-cards"
      justify="space-evenly"
    >
      <Grid container direction="row" justify="space-evenly">
        <Grow in>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <CardLayout
              title={"Top Skills"}
              description={"Approval ratings from current and past co-workers"}
              containsBodyText={false}
            >
              <Grid item>
                <Typography variant="h5" component="h5">
                  JS
                </Typography>
                <Typography variant="h5" component="h5">
                  HTML
                </Typography>
                <Typography variant="h5" component="h5">
                  CSS
                </Typography>
              </Grid>
              <Grid item>
                <ProgressLayout progress={85} />
                <ProgressLayout progress={70} />
                <ProgressLayout progress={80} />
              </Grid>
            </CardLayout>
          </Grid>
        </Grow>
        <Grow in timeout={1000}>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <CardLayout
              title={"Experience"}
              description={"This is what I have been up to the past few years"}
              containsBodyText={true}
            >
              During the past two years, I have been working as a software
              engineer on enterprise level software at The Regis Company. Before
              that, I worked at Charter Communications ,and created the
              front-end for an app that automated testing for network engineers.
            </CardLayout>
          </Grid>
        </Grow>
      </Grid>
      <Grid container direction="row" justify="space-evenly">
        <Grow in timeout={2000}>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <CardLayout
              title={"About"}
              description={"My elevator speech"}
              containsBodyText={true}
            >
              Hello there, I'm Zach a front-end dev who's curious how software
              influences people, and that is my drive to learn. I learn how to
              make compelling UIs driven by UX because I'm a people person ,and
              making them happy makes me happy.
            </CardLayout>
          </Grid>
        </Grow>
        <Grow in timeout={3000}>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <Card>
            <CardLayout
              title={"Contact"}
              description={"Let's grab coffee, tea, or a beer and talk tech!"}
              containsBodyText={true}
            >
             Email me zach94ATgmaildotcom
            </CardLayout>
            </Card>
          </Grid>
        </Grow>
      </Grid>
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