import React from "react";
import Layout from "../components/mainLayout";

import { Grid, Typography } from "@material-ui/core";

export default () => (
  <Layout>
    <Grid container justify="center">
      <Grid item>
        <Typography variant="h2" component="h2">
          Thank you!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p" component="p">
          I will get back to you as soon as I can :)
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);
