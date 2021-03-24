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
    { name: "Despliegue de software", status: "pendiente" },
    { name: "Pruebas unitarias", status: "pendiente" },
    { name: "Corregir fallos", status: "pendiente" },
    { name: "Codificación", status: "pendiente" },
    { name: "Revisión del diseño", status: "proceso" },
    { name: "Elaborar Presupuesto", status: "proceso" },
    { name: "Análisis de requisitos", status: "proceso" },
    { name: "Sistema de diseño", status: "pruebas" },
    { name: "Elaborar cronograma", status: "pruebas" },
    { name: "Recolección de requisitos", status: "terminado" },
  ]);

  const renderTasks = (status) =>
    taskItem
      .filter((task) => task.status === status)
      .map((task) => <TaskCard task={task} key={task.id} />);

  return (
    <div className="App">
      <Typography variant="h3" className={classes.title}>Tablero Kanban</Typography>
      <TaskCreator />
      <Grid container spacing={4}>
        <StatusCard name="Pendiente">{renderTasks("pendiente")}</StatusCard>
        <StatusCard name="En Proceso">{renderTasks("proceso")}</StatusCard>
        <StatusCard name="En Pruebas">{renderTasks("pruebas")}</StatusCard>
        <StatusCard name="Terminado">{renderTasks("terminado")}</StatusCard>
      </Grid>
    </div>
  );
}

export default App;
