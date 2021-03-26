import React, { useState, useEffect } from "react";
import { TaskCard } from "./components/TaskCard";
import { StatusCard } from "./components/StatusCard";
import { TaskCreator } from "./components/TaskCreator";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    margin: "0",
    textAlign: "center",
    padding: "15px",
  },
  App: {
    backgroundColor: "#f5f5f5",
  },
});

function App() {
  const classes = useStyles();
  const statusList = ["Pendiente", "En Proceso", "En Pruebas", "Terminado"];
  const [taskItem, setTaskItem] = useState([]);

  //Funcion para cambiar de status la tarea
  const setStatus = (task, newstatus) => {
    setTaskItem(
      taskItem.map(
        (t) =>
          t.name === task.name ? { ...t, status: t.status + newstatus } : t //Busca la tarea en el estado taskItem y le asigna el nuevo status
      )
    );
  };

  //Revisar si existe la key "tasks" en localStorage, si no existe se guarda una lista de tareas de ejemplo en el estado taskItem
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

  //Actualizar datos de localStorage con los datos del estado taskItem
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItem));
  }, [taskItem]);

  //Funcion para crear tarea nueva
  const createTask = (name) => {
    if (!taskItem.find((t) => t.name === name) && name !== "") {
      //Revisa si el nombre de la tarea ya existe o si el nombre esta vacío
      setTaskItem([...taskItem, { name: name, status: 0 }]); //Crea la tarea con status 0
    }
  };

  //Funcion para borrar tarea
  const deleteTask = (task) => {
    setTaskItem(taskItem.filter((t) => t.name !== task.name));
  };

  //Funcion para hacer render de las tareas
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
    <ThemeProvider theme={theme}>
      <Box className={classes.App}>
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
