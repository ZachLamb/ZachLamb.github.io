import React, { Fragment } from "react";

import "../styles/main.scss";

import { Grid, Paper, Typography } from "@material-ui/core";
import Img from "gatsby-image";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "gatsby";

import { StaticQuery, graphql } from "gatsby";

const sideMenuItems = [
  {
    title: "Elevator Pitch",
    link: "/"
  },
  { title: "Skills", link: "/skills/" },
  // { title: "Projects", link: "/projects/" },
  { title: "About Me", link: "/about/" }
  // { title: "Blog", link: "/blog/" },
  // { title: "Contact", link: "/contact/" }
];


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
      <Paper component="nav" className="nav-bar-purple">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          className="sidebar"
        >
          <Grid item className="image-avatar">
            <Img fluid={data.file.childImageSharp.fluid} alt={"Picture of Zach Lamb"} />
          </Grid>
          <Grid item>
            <Typography variant="h1" className="dev-name">
              Zach Lamb
            </Typography>
          </Grid>
          <Grid item>
            <List>
              {sideMenuItems.map((sideMenuItem, index) => (
                <ListItem buttoncomponent="li" key={index}>
                  <Link to={sideMenuItem.link}>
                    <ListItemText
                      className="sidebar-text"
                      primary={sideMenuItem.title}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    )}
  />
);
