import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import ProgressLayout from "../components/progressLayout";

import Grow from "@material-ui/core/Grow";
import {
  Grid,
  Card,
  Typography,
  InputBase,
  IconButton,
  Paper
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import "../styles/main.scss";

export default ({ data }) => (
  <Layout pageStyle={"blog-page"}>
    <Grid container direction="column">
      <Grid item xl={4} lg={4} md={4} className="blog-search-column">
        <Paper elevation={1} className="blog-search">
          <Grid container justify="space-between">
            <InputBase
              placeholder="Search blog posts"
              inputProps={{ "aria-label": "search blog posts" }}
              className="search-placeholder-text"
              disabled
            />
            <IconButton type="submit" aria-label="search" disabled>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className="card-container">
        <CardLayout cardClass="blog-card" title={"My Awesome Title"}>
          A blog post about hiking, dogs, food, tech, ect Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </CardLayout>
      </Grid>
    </Grid>
  </Layout>
);
