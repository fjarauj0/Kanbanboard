import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    height: "fit-content",
    margin: "20px",
    padding: "50px 20px",
  },
  name: { textAlign: "center", marginBottom: " 40px" },
});

export const StatusCard = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Paper className={classes.card}>
        <Typography variant="h5" gutterBottom className={classes.name}>
          {props.name}
        </Typography>
        {props.children}
      </Paper>
    </Grid>
  );
};
