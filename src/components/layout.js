import React from "react";

import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image"
import { Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "../styles/main.scss";

export default ({ children, headshotImg }) => (
  <div>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item lg={4}>
        <Drawer variant="permanent">
          <Grid
            container
            direction="column"
            justify="stretch"
            alignItems="center"
          >
            <Grid item lg={3} className="image-avatar">
                <Img fluid={headshotImg} />
            </Grid>
            <Grid item lg={9}>
              <List>
                {[
                  "Elevator Speech",
                  "Skills",
                  "Experience",
                  "About",
                  "Contact"
                ].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Drawer>
      </Grid>
    </Grid>
    <Grid
      container
      justify="space-around"
      fixed="true"
      alignItems="center"
      direction="column"
    >
      {children}
    </Grid>
  </div>
);



