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
    render={data => (
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
              I am a front-end dev who pulls from a UX background to create data
              driven and useful UIs. I currently work in the education field,
              developing interactive simulations for corporations on diverse
              agile teams.
            </Typography>
              <Typography variant="h5" component="h5">
                “I’m a people pusher, Kady. I push people”
              </Typography>
              <Typography variant="body1" component="p">
                In 2016, my favorite student group was falling apart ,so I
                decided to run to be its president. I had the task of rebuilding
                an LGBTQ student group from the ground up. With 4 members, I was
                able to raise our membership 50 students on average showing up.
                It taught me project management ,and that leadership is not
                something you can educate..
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
