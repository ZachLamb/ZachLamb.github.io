import React from "react";

import "../styles/main.scss";

import { Card, Grid, Typography, Button } from "@material-ui/core";

export default ({ children, title, description, containsBodyText, cardClass ,buttonTitle,buttonLink}) => (
  <Card className={"content-card-layout "+ cardClass} >
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
<<<<<<< HEAD
        {!!buttonTitle && !!buttonLink &&(
          <Button variant="outlined" className="card-buttonTitle" href={buttonLink}>{buttonTitle}</Button>
=======
        {!!button && !!buttonLink &&(
          <Button variant="outlined" className="card-button" href={buttonLink} rel="noopener">{button}</Button>
>>>>>>> af00ad53550d970843a261cd2291654baab92735
        )}
      </Grid>
    )}
    {!containsBodyText && <div className="card-content">{children}</div>}
  </Card>
);
