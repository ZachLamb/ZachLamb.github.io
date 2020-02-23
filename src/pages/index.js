import React from "react";
import Layout from "../components/mainLayout";

import "../styles/main.scss";
import Logo from "../components/logo";

export default ({ data }) => (
  <Layout pageStyle={"home-page"}>
      <Logo></Logo>
  </Layout>
);