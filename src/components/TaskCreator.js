import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddBoxIcon from "@material-ui/icons/AddBox";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");
  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);
  const createNewTask = () => {
    console.log(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="task__form">
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
