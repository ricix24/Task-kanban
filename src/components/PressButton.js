import React, { useState } from "react";
import "./PressButton.css";
import Priority from "./Priority";
import Status from "./Status";
import Users from "./Users";
import Priority1 from "./Priority1";


function PressButton() {
  const [showButtons, setShowButtons] = useState(false);
  const [showGroupingButtons, setShowGroupingButtons] = useState(false);
  const [showOrderingButtons, setShowOrderingButtons] = useState(false);

  const [group, setGroup] = useState('1');
  const [sortGroup, setSortGroup] = useState('4');

  const handleDisplayClick = () => {
    setShowButtons(!showButtons);
    // setShowGroupingButtons(false);
    // setShowOrderingButtons(false);
  };

  const handleGroupingClick = () => {
    setShowGroupingButtons(!showGroupingButtons);
    // setShowOrderingButtons(false);
    // setShowButtons(false); // Close display buttons
    setCh(true);
  };

  const handleOrderingClick = () => {
    setShowOrderingButtons(!showOrderingButtons);
    // setShowGroupingButtons(false);
    setCh(false);
    //setShowButtons(false); // Close display buttons
  };
  
  const [ch, setCh] = useState(true);

  const setChange = (e) => {
    setGroup(e.target.value);
    setCh(true);
  };

  const setSortChange = (e) => {
    setSortGroup(e.target.value);
    setCh(false);
  };

  return (
    <>
    <div className="container">
      <div className="navigation">
        <button onClick={handleDisplayClick} className="displayButton">
         <i class="fa-solid fa-sliders" ></i>
          Display
        </button>
        {showButtons && (
          <div className="sub-navigation">
            <div>
              <button onClick={handleGroupingClick} className="subButton">Grouping</button>
              {showGroupingButtons && (
                <select value={group} className="dropdown" onChange={setChange}>
                  <option value='1'>Status</option>
                  <option value='2'>Priority</option>
                  <option value='3'>User</option>
                </select>
              )}
            </div>
            <div>
              <button onClick={handleOrderingClick}  className="subButton">Ordering</button>
              {showOrderingButtons && (
                  <select value={sortGroup} className="dropdown" onChange={setSortChange}>
                    <option value='4'>Priority</option>
                    <option value='5'>Title</option>
                  </select>
              )}
            </div>
          </div>
        )}
      </div>
      <div onClick={handleDisplayClick}>
      {ch && 
        <div>
        {group === '1' && <Status />}
        {group === '2' && <Priority1 />}
        {group === '3' && <Users />}
      </div>
      }
      {
        !ch &&
        <div>
        {sortGroup === '4' && <Priority />}
        {sortGroup === '5' && <Users />}
      </div>
      }
      </div>
    </div>
  </>
  );
}
export default PressButton;


// import React, { useState, useRef } from "react";
// import "./PressButton.css";
// import Priority from "./Priority";
// import Status from "./Status";
// import Users from "./Users";
// import Priority1 from "./Priority1";

// function PressButton() {
//   const [showButtons, setShowButtons] = useState(false);
//   const [showGroupingButtons, setShowGroupingButtons] = useState(false);
//   const [showOrderingButtons, setShowOrderingButtons] = useState(false);

//   const [group, setGroup] = useState("1");
//   const [sortGroup, setSortGroup] = useState("4");
//   const [ch, setCh] = useState(true);

//   const displayButtonRef = useRef(null);

//   const handleDisplayClick = () => {
//     setShowButtons(!showButtons);
//     setShowGroupingButtons(false);
//     setShowOrderingButtons(false);
//   };

//   const handleGroupingClick = () => {
//     setShowGroupingButtons(!showGroupingButtons);
//     setShowOrderingButtons(false);
//     setCh(true);
//   };
  
//   const handleOrderingClick = () => {
//     setShowOrderingButtons(!showOrderingButtons);
//     setShowGroupingButtons(false);
//     setCh(false);
//   };
  
//   const handleOutsideClick = (e) => {
//     if (displayButtonRef.current && !displayButtonRef.current.contains(e.target)) {
//       // setShowGroupingButtons(false);
//       // setShowOrderingButtons(false);
//       setShowButtons(false);
//     }
//   };


//   const setChange = (e) => {
//     setGroup(e.target.value);
//     setCh(true);
//   };

//   const setSortChange = (e) => {
//     setSortGroup(e.target.value);
//     setCh(false);
//   };

//   return (
//     <>
//     <div className="container" onClick={handleOutsideClick}>
//       <div className="navigation">
//         <button onClick={handleDisplayClick} className="displayButton" ref={displayButtonRef}>
//           <i className="fa-solid fa-sliders"></i>
//           Display
//         </button>
//         {showButtons && (
//           <div>
//             <div>
//               <button onClick={handleGroupingClick} className="subButton">
//                 Grouping
//               </button>
//               {showGroupingButtons && (
//                 <select value={group} className="dropdown" onChange={setChange}>
//                   <option value="1">Status</option>
//                   <option value="2">Priority</option>
//                   <option value="3">User</option>
//                 </select>
//               )}
//             </div>
//             <div>
//               <button onClick={handleOrderingClick} className="subButton">
//                 Ordering
//               </button>
//               {showOrderingButtons && (
//                 <select value={sortGroup} className="dropdown" onChange={setSortChange}>
//                   <option value="4">Priority</option>
//                   <option value="5">Title</option>
//                 </select>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//       <div onClick={handleDisplayClick}>
//       {ch && 
//         <div>
//         {group === '1' && <Status />}
//         {group === '2' && <Priority1 />}
//         {group === '3' && <Users />}
//       </div>
//       }
//       {
//         !ch &&
//         <div>
//         {sortGroup === '4' && <Priority />}
//         {sortGroup === '5' && <Users />}
//       </div>
//       }
//       </div>
//     </div>
//   </>
//   );
// }
// export default PressButton;
