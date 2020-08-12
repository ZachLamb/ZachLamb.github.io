import React from "react";

import CardLayout from "../components/cardLayout";
import Layout from "../components/mainLayout";
import Grow from "@material-ui/core/Grow";
import { Grid, Card, Typography, Paper, Button } from "@material-ui/core";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "zachlamb.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout pageStyle={"about-page"}>
        <Grid
          container
          direction="row"
          spacing={32}
          className="about-container"
        >
          <Grid
            item
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className="image-avatar"
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt={"Picture of Zach Lamb"}
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography variant="h5" component="h5">
              An engineer with a soft spot for UX
            </Typography>
            <Typography variant="body1" component="p">
              I am a driven front-end developer with extensive UX experience. I
              constantly leverage my UX background to create data-driven and
              engaging UIs. While working on enterprise-level software, I am
              constantly honing my HTML, CSS, and Javascript skills. Using
              cutting edge frameworks libraries, like React, is something I’m
              passionate about. 
            </Typography>
            <Typography variant="h5" component="h5">
              Swipes Right on Agile
            </Typography>
            <Typography variant="body1" component="p">
              I joined my last company as a jr. developer. I struggled to keep up with client's ever changing demands and communication in my team. 
              As I have learned more about the Agile method along with my teammates, we have been empowered to adapt to those needs. Those hard lessons 
              have shown how important each Agile principle is. Through this, I have grown to become the Scrum Master and Agile Coach on my project teams.
            </Typography>
            <Typography variant="h5" component="h5">
              The outdoors and civic duty are my passion
            </Typography>
            <Typography variant="body1" component="p">
              I grew up exploring the Rocky Mountains and learning how to be a
              steward for the environment. In my free time, I love working on
              tech projects that have anything to do with the outdoors. I love
              volunteering too. I have helped organize hackathons in the past ,
              and I am actively involved with Code For America.
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    )}
  />
);
