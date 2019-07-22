import React from "react";

import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image";
import { Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "../styles/main.scss";

export default ({ children, headshotImg }) => (
  <div>
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Grid item>
        <Drawer variant="permanent">
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="stretch"
            className="sidebar"
          >
            <Grid item  className="image-avatar">
              <Img fluid={headshotImg} />
            </Grid>
            <Grid item>
              <List>
                {[
                  "Blog",
                  "Contact me",
                  "Donate",
                  "About",
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

      <Grid item>
        <Grid
          container
          justify="space-around"
          fixed="true"
          alignItems="center"
          direction="column"
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  </div>
);
