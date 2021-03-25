import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
      <div>
        {props.task.status == 0 ? (
          ""
        ) : (
          <IconButton
            aria-label="left"
            onClick={() => props.setStatus(props.task, -1)}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}
        {props.task.status == 3 ? (
          ""
        ) : (
          <IconButton
            aria-label="right"
            onClick={() => props.setStatus(props.task, 1)}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}

        <IconButton aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};
