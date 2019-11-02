import React from "react";

import { Button, Grid, Paper } from "@material-ui/core";

import Navbar from "./navbar";
import SEO from "../components/SEO";

import "../styles/main.scss";

export default ({ children, pageStyle }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    className="page-container "
  >
    <SEO></SEO>
    <Navbar></Navbar>
    <main className={"main-view " + pageStyle}>{children}</main>
  </Grid>
);
