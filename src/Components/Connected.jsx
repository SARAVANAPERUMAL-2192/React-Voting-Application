// import React from "react";
// import "./connect.css";
// import bp from "../assets/BJP.png"
// import INC from "../assets/NC.png"
// import AAP from "../assets/AAP.png"
// import NCP from "../assets/NCP.png"


// const partiesURL = {
//   BJP: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/180px-Bharatiya_Janata_Party_logo.svg.png",
//   INC: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/150px-Indian_National_Congress_hand_logo.svg.png",
//   ShivSena:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/88px-Logo_of_Shiv_Sena.svg.png",};

// export { partiesURL };

// const Connected = (props) => {
//   return (
//     <div className="connected-container">
//       <h1 className="connected-header">You are Connected to Metamask</h1>
//       <p className="connected-account">Metamask Account: {props.account}</p>
//       <p className="connected-account">Remaining Time: {props.remainingTime}</p>
//       {props.showButton ? (
//         <p className="connected-account">You have already voted</p>
//       ) : (
//         <div>
//           <input
//             type="number"
//             placeholder="Enter Candidate Index"
//             value={props.number}
//             onChange={props.handleNumberChange}
//           ></input>
//           <br />
//           <button className="login-button" onClick={props.voteFunction}>
//             Vote
//           </button>
//         </div>
//       )}

//       <table id="myTable" className="candidates-table">
//         <thead>
//           <tr>
//             <th>Party</th>
//             <th>Index</th>
//             <th>Candidate name</th>
//             <th>Candidate votes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.candidates.map((candidate, index) => (
//             <tr key={index}>
//               <td>
//                 <img
//                   className="party-symbol"
//                   src={bp}
//                   alt=""
//                 />
//                 <img
//                   className="party-symbol"
//                   src={INC}
//                   alt=""
//                 />
//                 <img
//                   className="party-symbol"
//                   src={AAP}
//                   alt=""
//                 />
//                 <img
//                   className="party-symbol"
//                   src={NCP}
//                   alt=""
//                 />
//               </td>
//               <td>{candidate.index}</td>
//               <td>{candidate.name}</td>
//               <td>{candidate.voteCount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Connected;

import React from "react";



const Connected = (props) => {
  return (
    <div className="connected-container">
      <h1 className="connected-header">You are Connected to Metamask</h1>
      <p className="connected-account">Metamask Account: {props.account}</p>
      <p className="connected-account">Remaining Time: {props.remainingTime}</p>
      {props.showButton ? (
        <p className="connected-account">You have already voted</p>
      ) : (
        <div>
          <input
            type="number"
            placeholder="Enter Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
          />
          <br />
          <button className="login-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>
      )}

      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate name</th>
            <th>Candidate votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{candidate.name}</td>
              <td>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Connected;
