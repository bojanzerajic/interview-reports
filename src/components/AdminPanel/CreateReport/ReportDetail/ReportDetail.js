import React from "react";
import style from "./ReportDetail.module.scss";

const ReportDetail = ({
  prevStep,
  getInterviewDate,
  getPhase,
  getStatus,
  getNote,
  submitReport,
}) => {
  return (
    <div className={`${style.wrap} col-lg-12`}>
      <form className={style.form}>
        <div className={`${style.form} row`}>
          <div className="col-lg-4">
            <label className="col-lg-12">Interview Date:</label>
            <input
              className="col-lg-12"
              type="date"
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => getInterviewDate(e.currentTarget)}
            ></input>
          </div>
          <div className="col-lg-4">
            <label className="col-lg-12">Phase:</label>
            <select
              className="col-lg-12"
              onChange={(e) => getPhase(e.currentTarget)}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option>Technical</option>
              <option value="HR">HR</option>
              <option value="Skill">Skill</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label className="col-lg-12" for="status">
              Status:
            </label>
            <select
              className="col-lg-12"
              onChange={(e) => getStatus(e.currentTarget)}
              name="status"
              required
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="Approved">Approved</option>
              <option value="In process">In process</option>
              <option value="Declined">Declined</option>
            </select>
          </div>
        </div>
        <div className={`${style.notes}`}>
          <label>Notes:</label>
          <textarea
            className={`${style.textarea} col-lg-12`}
            onChange={(e) => getNote(e.currentTarget)}
          ></textarea>
        </div>
      </form>
      <div className={style.btn_wrapper}>
        <button className={style.btn} onClick={prevStep}>
          Back
        </button>
        <button onClick={submitReport} className={style.btn} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export { ReportDetail };
