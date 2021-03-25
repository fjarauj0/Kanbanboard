import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
});

export const TaskCreator = (props) => {
  const classes = useStyles();

  const [newTaskName, setNewTaskName] = useState("");
  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);
  const createNewTask = () => {
    console.log(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className={classes.form}>
      <TextField
        id="taskname"
        size="small"
        label="Ingresa nueva tarea"
        value={newTaskName}
        onChange={updateNewTaskValue}
        variant="outlined"
      />
      <Button
        onClick={createNewTask}
        variant="contained"
        color="primary"
        startIcon={<AddBoxIcon />}
      >
        Agregar
      </Button>
    </div>
  );
};
