import React from "react";
import notes from "../notes";
import "./Users.css";
import Ticket from "./Ticket";


function Status() {
  const allTickets = notes.flatMap(note => note.tickets);

  const ticketsByStatus = allTickets.reduce((acc, ticket) => {
    if (!acc[ticket.status]) {
      acc[ticket.status] = [];
    }
    acc[ticket.status].push(ticket);
    return acc;
  }, {});

  return (
    <div className="Usercontainer">
      <h1 className="use">Status-wise</h1>
      <div className="user-columns">
        {Object.keys(ticketsByStatus).map(status => (
          <div key={status} className="user-column">
            <h2 className="note-title" style={{margin:'20px'}}>{status}</h2>
            <div>
              {notes.map(note => (
                <div key={note.id}>
                  {note.tickets
                    .filter(ticket => ticket.status === status)
                    .map(ticket => (
                      <Ticket ticket={ticket} />
                    ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Status;