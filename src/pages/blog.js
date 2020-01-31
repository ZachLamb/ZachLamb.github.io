import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import ProgressLayout from "../components/progressLayout";
import Grow from "@material-ui/core/Grow";
import { Grid, Card, Typography } from "@material-ui/core";

import "../styles/main.scss";

export default ({ data }) => (
  <Layout headshotImg={data.file.childImageSharp.fluid}>
    
  </Layout>
);