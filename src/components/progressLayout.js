import React, { useState, Fragment } from "react";
import { Typography } from "@material-ui/core";

import "../styles/main.scss";

export default ({ children, value, progress, label }) => (
  <Fragment>
    <div className="progress">
    <Typography variant="h5" component="h5">{label}</Typography>
      <div className="progress-bar">
        <Filler progress={progress} />
      </div>
    </div>
  </Fragment>
);

const Filler = props => {
  return (
    <div className="progress-filler" style={{ width: `${props.progress}%` }} />
  );
};
