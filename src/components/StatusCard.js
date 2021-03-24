import React from 'react'

export const StatusCard = (props) => (
  <div className="statusCard">
    <h3 className="statusCard__name">{props.name}</h3>
    <div className="statusCard__conatiner">{props.children}</div>
  </div>
);