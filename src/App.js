import React, { useState, useEffect } from "react";
import { TaskCard } from "./components/TaskCard";
import { StatusCard } from "./components/StatusCard";
import { TaskCreator } from "./components/TaskCreator";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    margin: "0",
    textAlign: "center",
    backgroundColor: "#383f70",
    color: "white",
    padding: "15px",
  },
  board: {},
});

function App() {
  const classes = useStyles();

  const statusList = ["Pendiente", "En Procesoss", "En Pruebas", "Terminado"];
  const [taskItem, setTaskItem] = useState([]);

  const setStatus = (task, newstatus) => {
    setTaskItem(
      taskItem.map((t) =>
        t.name === task.name ? { ...t, status: t.status + newstatus } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItem(JSON.parse(data));
    } else {
      setTaskItem([
        { name: "Despliegue de software", status: 0 },
        { name: "Pruebas unitarias", status: 0 },
        { name: "Corregir fallos", status: 0 },
        { name: "Codificación", status: 0 },
        { name: "Revisión del diseño", status: 1 },
        { name: "Elaborar Presupuesto", status: 1 },
        { name: "Análisis de requisitos", status: 1 },
        { name: "Sistema de diseño", status: 2 },
        { name: "Elaborar cronograma", status: 2 },
        { name: "Recolección de requisitos", status: 3 },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItem));
  }, [taskItem]);

  const createTask = (name) => {
    if (!taskItem.find((t) => t.name === name) && name !== "") {
      setTaskItem([...taskItem, { name: name, status: 0 }]);
    }
  };

  const deleteTask = (task) => {
    setTaskItem(taskItem.filter((t) => t.name !== task.name));
  };

  const renderTasks = (status) =>
    taskItem
      .filter((task) => task.status === status)
      .map((task) => (
        <TaskCard
          task={task}
          key={task.name}
          setStatus={setStatus}
          deleteTask={deleteTask}
          statusLength={statusList.length}
        />
      ));

  return (
    <div className="App">
      <Typography variant="h3" className={classes.title}>
        Tablero Kanban
      </Typography>
      <TaskCreator createTask={createTask} />
      <Grid container className={classes.board}>
        {statusList.map((status, index) => (
          <StatusCard key={status} name={status}>
            {renderTasks(index)}
          </StatusCard>
        ))}
      </Grid>
    </div>
  );
}

export default App;
