import React from "react";

import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image";
import { Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "../styles/main.scss";

const sideMenuItems = [
  "Elevator Pitch",
  "Projects",
  "About Me",
  "Blog",
  "Contact"
];

export default ({ children, headshotImg }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    className="page-container "
  >
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
                  <ListItem button key={index}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
    <main className=" main-view">
      {children}
    </main>
  </Grid>
);
