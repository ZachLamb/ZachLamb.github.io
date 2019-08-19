import React from "react";

import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image";
import { Drawer } from "@material-ui/core";
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
    direction="row"
    justify="center"
    alignItems="center"
    className="page-container "
  >
    <Grid item>
      <nav>
        <Drawer variant="permanent">
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
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Drawer>
      </nav>
    </Grid>
    <Grid item className="page-container main-view">
      {children}
    </Grid>
  </Grid>
);
