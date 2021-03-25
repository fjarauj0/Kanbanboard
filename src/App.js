import React, { useState } from "react";
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
});

function App() {
  const classes = useStyles();

  const [taskItem, setTaskItem] = useState([
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

  const setStatus = (task, newstatus) => {
    setTaskItem(
      taskItem.map((t) =>
        t.name === task.name ? { ...t, status: t.status + newstatus } : t
      )
    );
  };

  const renderTasks = (status) =>
    taskItem
      .filter((task) => task.status === status)
      .map((task) => (
        <TaskCard task={task} key={task.name} setStatus={setStatus} />
      ));

  return (
    <div className="App">
      <Typography variant="h3" className={classes.title}>
        Tablero Kanban
      </Typography>
      <TaskCreator />
      <Grid container spacing={4}>
        <StatusCard name="Pendiente">{renderTasks(0)}</StatusCard>
        <StatusCard name="En Proceso">{renderTasks(1)}</StatusCard>
        <StatusCard name="En Pruebas">{renderTasks(2)}</StatusCard>
        <StatusCard name="Terminado">{renderTasks(3)}</StatusCard>
      </Grid>
    </div>
  );
}

export default App;
