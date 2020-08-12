import React from "react";

import "../styles/main.scss";

import { Card, Grid, Typography, Button } from "@material-ui/core";

export default ({
  children,
  imageURL,
  title,
  description,
  containsBodyText,
  cardClass,
  buttonTitle,
  buttonLink,
}) => (
  <Card className={"content-card-layout " + cardClass}>
    <Grid container>
      <Grid item>
        <img src={imageURL} width="25%" height="auto"></img>
      </Grid>
      <Grid item>
        <Typography component="article">
          <Typography variant="h5" component="h5">
            {title}
          </Typography>
          <Typography variant="h5" component="h5">
            {description}
          </Typography>
          {!containsBodyText && <p className="card-content">{children}</p>}
          <Button
            variant="outlined"
            className="card-buttonTitle"
            href={buttonLink}
          >
            {buttonTitle}
          </Button>
        </Typography>
      </Grid>
    </Grid>
  </Card>
);
