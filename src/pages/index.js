import React from "react";
import { graphql } from "gatsby";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import ProgressLayout from "../components/progressLayout";
import Grow from "@material-ui/core/Grow";
import { Grid, Card, Typography } from "@material-ui/core";

import "../styles/main.scss";
import Logo from "../components/logo";

export default ({ data }) => (
  <Layout pageStyle={"home-page"}>
      <Logo></Logo>
  </Layout>
);