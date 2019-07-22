import React from "react";
import Layout from "../components/layout";
import "../styles/main.scss";

import { graphql } from "gatsby";

export default ({data}) => (
  <Layout headshotImg={data.file.childImageSharp.fluid}>
    <div>
      "hello there!"
    </div>
  </Layout>
);


export const query = graphql`
  query {
    file(relativePath: { eq: "zachlamb.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`
