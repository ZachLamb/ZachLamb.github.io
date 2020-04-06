import React from "react";
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
import BlogPosts from "../components/blogPost";

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
        <BlogPosts></BlogPosts>
      </Grid>
    </Grid>
  </Layout>
);
