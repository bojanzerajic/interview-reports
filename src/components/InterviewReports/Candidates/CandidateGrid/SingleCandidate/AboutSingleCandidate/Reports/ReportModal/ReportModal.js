import React from "react";
import "./ReportModal.css";

const ReportModal = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <hr></hr>
      <div className="ReportModal__wrapper">
        <div className="row">
          <div className="col-lg-4 ReportModal__sidebar">
            <p>Company:</p>
            <h1>{props.company}</h1>
            <p>Interview Date:</p>
            <h1>{props.date}</h1>
            <p>Phase:</p>
            <h1>{props.phase}</h1>
            <p>Status:</p>
            <h1>{props.status}</h1>
          </div>
          <div className="ReportModal__notes col-lg-8">
            <p>Notes:</p>
            <p>{props.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ReportModal };
