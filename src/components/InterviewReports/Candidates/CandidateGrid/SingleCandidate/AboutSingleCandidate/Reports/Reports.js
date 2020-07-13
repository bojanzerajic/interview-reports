import React from "react";
import style from "./Reports.module.scss";
import { SingleReport } from "./SingleReport/SingleReport";
import {getFullDate} from '../../../../../../../services/getDate'

class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <div className={style.container}>
        <h2>Reports</h2>
        <table className={style.table}>
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th colSpan="2">Status</th>
          </tr>
          {this.props.reports.map((report, i) => (
            <SingleReport
              key={i}
              company={report.companyName}
              date={getFullDate(report.interviewDate)}
              status={report.status}
              name={report.candidateName}
              phase={report.phase}
              note={report.note}
            />
          ))}
        </table>
      </div>
    );
  }
}
export { Reports };
