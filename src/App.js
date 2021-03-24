import React, { useState } from "react";
import { TaskCard } from "./components/TaskCard";
import { StatusCard } from "./components/StatusCard";

function App() {
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
      .map((task) => <TaskCard task={task} key={task.name} />);

  return (
    <div className="App">
      <h1>Tablero Kanban</h1>

      <div className="board">
        <StatusCard name="Pendiente">
          <div>{renderTasks("pendiente")}</div>
        </StatusCard>
        <StatusCard name="En Proceso">
          <div>{renderTasks("proceso")}</div>
        </StatusCard>
        <StatusCard name="En Pruebas">
          <div>{renderTasks("pruebas")}</div>
        </StatusCard>
        <StatusCard name="Terminado">
          <div>{renderTasks("terminado")}</div>
        </StatusCard>
      </div>
    </div>
  );
}

export default App;
