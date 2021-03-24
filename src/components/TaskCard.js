import React from "react";

export const TaskCard = (props) => (
  <div key={props.task.name} className="taskCard">
    <p>{props.task.name}</p>
  </div>
);
