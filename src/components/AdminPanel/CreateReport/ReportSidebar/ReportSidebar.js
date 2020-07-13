import React from "react";
import style from "./ReportSidebar.module.scss";

const ReportSidebar = (props) => {
  return (
    <div className={`${style.wrapper} col-lg-12`}>
      {props.page === 1 ? (
        <h4 className={`${style.bold} col-lg-12`}>
          <span className={style.num_first}> 1 </span> Select Candidate
        </h4>
      ) : (
        <h4 className={`${style.select_candidate} col-lg-12`}>
          <span className={style.num_first}> 1 </span> Select Candidate
        </h4>
      )}

      {props.page === 2 ? (
        <h4 className={`${style.bold} col-lg-12`}>
          <span className={style.num_second}>2</span> Select Company
        </h4>
      ) : (
        <h4 className={`${style.select_company} col-lg-12`}>
          <span className={style.num_second}>2</span> Select Company
        </h4>
      )}

      {props.page === 3 ? (
        <h4 className={`${style.bold} col-lg-12`}>
          <span className={style.num_third}>3</span> Fill Report Details
        </h4>
      ) : (
        <h4 className={`${style.select_report_details} col-lg-12`}>
          <span className={style.num_third}>3</span> Fill Report Details
        </h4>
      )}
    </div>
  );
};

export { ReportSidebar };
