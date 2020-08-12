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
    <Grid container className="blog-container" direction="column" display={{ sm: "none", lg: "none" }}>
      <Grid item  lg={12} md={12} className="card-container">
        <BlogPosts></BlogPosts>
      </Grid>
    </Grid>
  </Layout>
);
