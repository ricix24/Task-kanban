import React from "react";
import notes from "../notes";
import Ticket from "./Ticket";
// import "./Users.css";

function Priority() {
  const priorityColumns = [];

  const priorityLevels = [
    { level: 4, name: "Urgent" },
    { level: 3, name: "High" },
    { level: 2, name: "Medium" },
    { level: 1, name: "Low" },
    { level: 0, name: "No priority" },
  ];

  priorityLevels.forEach(priority => {
    const ticketsWithPriority = notes[0].tickets.filter(
      ticket => ticket.priority === priority.level
    );

    if (ticketsWithPriority.length > 0) {
      const column = (
        <div key={priority.level} className="user-column">
          <h2 className="note-title" style={{margin:'20px'}}>{priority.name}</h2>
          <div className="note-list">
            {ticketsWithPriority.map(ticket => (
              <Ticket ticket={ticket} />
            ))}
          </div>
        </div>
      );

      priorityColumns.push(column);
    }
  });

  return (
    <div className="Usercontainer">
      <h1 className="use"> by Priority</h1>
      <div className="user-columns">
        {priorityColumns}
      </div>
    </div>
  );
}

export default Priority;
