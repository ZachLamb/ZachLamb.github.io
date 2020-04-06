import React from "react";

import "../styles/main.scss";

import { Card, Grid, Typography, Button } from "@material-ui/core";

export default ({ children, title, description, containsBodyText, cardClass ,buttonTitle,buttonLink}) => (
  <Card className={"content-card-layout "+ cardClass} >
    <Typography component="article">
    <Typography variant="h4" component="h4">
      {title}
    </Typography>
    <Typography variant="h5" component="h5">
      {description}
    </Typography>
    {!!containsBodyText && (
      <Grid container>
        <Typography variant="body2" component="p" className="card-content">
          {children}
        </Typography>
        {!!buttonTitle && !!buttonLink &&(
          <Button variant="outlined" className="card-buttonTitle" href={buttonLink}>{buttonTitle}</Button>
        )}
      </Grid>
    )}
    {!containsBodyText && <div className="card-content">{children}</div>}
    </Typography>
  </Card>
);
