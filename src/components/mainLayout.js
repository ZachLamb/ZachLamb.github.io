import React from "react";

import Grid from "@material-ui/core/Grid";

import Navbar from "./navbar";
import SEO from "../components/SEO";

import "../styles/main.scss";

export default ({ children,pageStyle }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    className="page-container "
  >

<SEO></SEO>
  <Navbar></Navbar>
    <main className={"main-view "+pageStyle}>
      {children}
    </main>
  </Grid>
);
