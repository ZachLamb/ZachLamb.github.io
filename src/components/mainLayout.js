import React from "react";

import Grid from "@material-ui/core/Grid";

import "../styles/main.scss";
import Navbar from "../navbar";

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
