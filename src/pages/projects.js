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

export default ({ data }) => (
  <Layout>
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
            </CardLayout>
          </Grid>
        </Grow>
        <Grow in timeout={1000}>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
          </Grid>
        </Grow>
      </Grid>
      <Grid container direction="row" justify="space-evenly">
        <Grow in timeout={2000}>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
          </Grid>
        </Grow>
        <Grow in timeout={3000}>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
          </Grid>
        </Grow>
      </Grid>
    </Grid>
  </Layout>
);