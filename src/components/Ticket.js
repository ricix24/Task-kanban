import React from "react";
import "./Ticket.css";
import logo from "./logo.png";
import logo1 from "./logo1.jpg";


function Ticket({ ticket }) {
    return (
      <div className="ticket">
        <div className="note">
          <h3 className="heading"><div> {ticket.id}</div>  <div className="profileicons">
              <img className="logo" src={logo} alt="Logo"/> 
          </div></h3>
          <p className="paragraph">{ticket.title}</p>
          <h3 className="heading1">
          <div><img className="logo1" src={logo1} alt="Logo1"/> </div>
          <div> {ticket.tag}</div>  
          </h3>
        </div>
      </div>
    );
}

export default Ticket;

// import React, { useState } from "react";
// import "./Ticket.css";
// import logo from "./logo.png";
// import logo1 from "./logo1.jpg";

// function Ticket({ ticket }) {
//   const [adding, setAdding] = useState(false);
//   const [newTicket, setNewTicket] = useState({ id: "", title: "", tag: "" });

//   const toggleAdding = () => {
//     setAdding(!adding);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewTicket((prevTicket) => ({
//       ...prevTicket,
//       [name]: value,
//     }));
//   };

//   const handleAdd = () => {
//     // Add your logic here to save the new ticket data
//     // For example, you can use an API call or update the state.
//     console.log("New Ticket:", newTicket);

//     // Clear the form and toggle off adding mode
//     setNewTicket({ id: "", title: "", tag: "" });
//     toggleAdding();
//   };

//   return (
//     <>
//     <button className="add-button" onClick={toggleAdding}>
//       + Add
//     </button>
//     {adding && (
//       <div className="add-card">
//         <input
//           type="text"
//           placeholder="ID"
//           name="id"
//           value={newTicket.id}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           placeholder="Title"
//           name="title"
//           value={newTicket.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           placeholder="Tag"
//           name="tag"
//           value={newTicket.tag}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleAdd}>Add</button>
//       </div>
//     )}
//     <div className="ticket">
//       <div className="note">
//         <div className="note-header">
//           <h3 className="heading">
//             <div> {ticket.id}</div>
//             <div className="profileicons">
//               <img className="logo" src={logo} alt="Logo" />
//             </div>
//           </h3>
//           <p className="paragraph">{ticket.title}</p>
//           <h3 className="heading1">
//             <div>
//               <img className="logo1" src={logo1} alt="Logo1" />
//             </div>
//             <div> {ticket.tag}</div>
//           </h3>
//         </div>
//       </div>
//     </div>
//      </>
//   );
// }

// export default Ticket;
