import React from "react";
import notes from "../notes";
// import "./Priority.css";
import "./Users.css";
import Ticket from "./Ticket";

function Priority() {
  const priorityColumns = [];

  for (let priority = 0; priority <= 3; priority++) {
    const ticketsWithPriority = notes[0].tickets.filter(
      ticket => ticket.priority === priority
    );

    if (ticketsWithPriority.length > 0) {
      const column = (
        <div key={priority} className="user-column">
          <h2 className="note-title" style={{margin:'20px'}}>Priority: {priority}</h2>
          <div className="note-list">
            {ticketsWithPriority.map(ticket => (
              <Ticket ticket={ticket} />
            ))}
          </div>
        </div>
      );

      priorityColumns.push(column);
    }
  }

  return (
    <div className="Usercontainer">
      <h1 className="use">Tickets by Priority</h1>
      <div className="user-columns">
        {priorityColumns}
      </div>
    </div>
  );
}

export default Priority;