import React,{ Fragment } from "react";

import "../styles/main.scss";

import {Grid, Paper  } from "@material-ui/core";
import Img from "gatsby-image";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const sideMenuItems = [
  "Elevator Pitch",
  "Projects",
  "About Me",
  "Blog",
  "Contact"
];

export default ({ children, headshotImg }) => (
    <Paper component="nav">
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="stretch"
      className="sidebar"
    >
      <Grid item className="image-avatar">
        <Img fluid={headshotImg} />
      </Grid>
      <Grid item>
        <List>
          {sideMenuItems.map((text, index) => (
            <Fragment >
              <ListItem button key={index} component="li">
                <ListItemText primary={text} />
              </ListItem>
          </Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  </Paper>
);
