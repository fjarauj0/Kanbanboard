import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    height: "100px",
    borderRadius: "10px",
    boxShadow: "0px 0px 11px 4px rgb(0 0 0 / 10%)",
    padding: "20px",
    marginBottom: "20px",
    justifyContent: "space-between",
  },
  icon:{
    padding: "5px"
  }
});

export const TaskCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Typography variant="body1">{props.task.name}</Typography>
      <div>
        {props.task.status === 0 ? (
          ""
        ) : (
          <IconButton
            className={classes.icon}
            aria-label="left"
            onClick={() => props.setStatus(props.task, -1)}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}
        {props.task.status === 3 ? (
          ""
        ) : (
          <IconButton
            className={classes.icon}
            aria-label="right"
            onClick={() => props.setStatus(props.task, 1)}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}

        <IconButton
          className={classes.icon}
          aria-label="delete"
          onClick={() => props.deleteTask(props.task)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};
