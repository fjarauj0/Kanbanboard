import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    height: "100px",
    borderRadius: "10px",
    justifyContent: "space-between",
  },
  icon: {
    padding: "5px",
  },
});

export const TaskCard = (props) => {
  const classes = useStyles();

  return (
    <Box boxShadow={3} mb={2} p={3} className={classes.card}>
      <Typography variant="body1">{props.task.name}</Typography>
      <Box>
        {props.task.status === 0 ? (
          ""
        ) : (
          <IconButton
            className={classes.icon}
            color="primary"
            aria-label="left"
            onClick={() => props.setStatus(props.task, -1)}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
        )}
        {props.task.status === props.statusLength - 1 ? (
          ""
        ) : (
          <IconButton
            className={classes.icon}
            color="primary"
            aria-label="right"
            onClick={() => props.setStatus(props.task, 1)}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        )}

        <IconButton
          className={classes.icon}
          color="secondary"
          aria-label="delete"
          onClick={() => props.deleteTask(props.task)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};
