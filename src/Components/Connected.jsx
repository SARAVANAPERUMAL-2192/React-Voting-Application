import React from "react";
import bp from "../assets/BJP.png";
import INC from "../assets/NC.png";
import AAP from "../assets/AAP.png";
import NCP from "../assets/NCP.png";

const partiesURL = {
  BJP: bp,
  INC: INC,
  AAP: AAP,
  NCP: NCP,
};

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
