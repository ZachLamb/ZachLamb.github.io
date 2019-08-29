import React from "react";

import Grid from "@material-ui/core/Grid";

import Navbar from "./navbar";

import "../styles/main.scss";

export default ({ children, headshotImg }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    className="page-container "
  >
  <Navbar headshotImg={headshotImg} ></Navbar>
    <main className="main-view">
      {children}
    </main>
  </Grid>
);
