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
  { title: "Zach Lamb", link: "/", cssName: "home" },
  { title: "Projects", link: "/projects/" },
  { title: "About Me", link: "/about/" },
  { title: "Blog", link: "/blog/" },
  { title: "Contact", link: "/contact/" }
];

const NavBar = props => {
  return (
    <nav>
    <List>
    {sideMenuItems.map((sideMenuItem, index) => (
      <ListItem buttoncomponent="li" key={index} alignItems="center" id="nav-item" className={sideMenuItem.cssName ? sideMenuItem.cssName:""}>
        <Link to={sideMenuItem.link} activeClassName="active">
          <ListItemText
            className="sidebar-text"
            primary={sideMenuItem.title}
          />
        </Link>
        <div className="dot"></div>
      </ListItem>
    ))}
  </List>
  </nav>
);
};

export default NavBar;
