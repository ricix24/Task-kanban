import React from "react";
import notes from "../notes";
import "./Users.css";
import Ticket from "./Ticket";


function Users() {
  const ticketsByUser = {};

  notes.forEach(note => {
    note.tickets.forEach(ticket => {
      const user = note.users.find(user => user.id === ticket.userId);
      if (user) {
        if (!ticketsByUser[user.name]) {
          ticketsByUser[user.name] = [];
        }
        ticketsByUser[user.name].push({ ticket, note });
      }
    });
  });

  return (
    <div className="Usercontainer">
      <h1 className="use">User-wise</h1>
      <div className="user-columns">
        {Object.keys(ticketsByUser).map(userName => (
          <div key={userName} className="user-column">
            <h2 className="note-title" style={{margin:'20px'}}>{userName}</h2>
            <div className="note-list">
              {ticketsByUser[userName].map(({ ticket}) => (
                <div key={ticket.id}>
                  <Ticket ticket={ticket} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
