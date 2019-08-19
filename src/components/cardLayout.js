import React from "react";

import "../styles/main.scss";

import { Card, Grid, Typography } from "@material-ui/core";

export default ({ children, title, description, containsBodyText }) => (
  <Card>
    <Typography variant="h4" component="h4">
      {title}
    </Typography>
    <Typography variant="h5" component="h5">
      {description}
    </Typography>
    {!!containsBodyText && (
      <Grid container>
        <Typography variant="body1" component="p" className="card-content">
          {children}
        </Typography>
      </Grid>
    )}
    {!containsBodyText && <div className="card-content">{children}</div>}
  </Card>
);
