import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    height: "100px",
    borderRadius: "10px",
    boxShadow: "0px 0px 11px 4px rgb(0 0 0 / 10%)",
    padding: "20px",
  },
});

export const TaskCard = (props) => {
  const classes = useStyles();

  return (
    <div key={props.task.name} className={classes.card} id={props.task.id}>
      <p>{props.task.name}</p>
    </div>
  );
};
