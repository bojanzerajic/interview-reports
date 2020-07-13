import React from "react";
import style from "./AdminSingleReport.module.scss";
import Modal from "react-modal";
import { FaEye } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AdminReportModal } from "./AdminReportModal/AdminReportModal";
import { getFullDate } from "../../../../../services/getDate";

class AdminSingleReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }
  popOut = () => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    return (
      <div className="row">
        {this.props.reports.map((report, i) => (
          <div
            className={`${style.wrapper} col-lg-12 col-md-12 col-sm-12 col-12`}
          >
            <div className="row">
              <div
                className={`${style.divide_line} col-lg-3 col-md-3 col-sm-12 col-12`}
              >
                <h3>{report.companyName}</h3>
                <p>Company</p>
              </div>
              <div
                className={`${style.divide_line} col-lg-3 col-md-3 col-sm-12 col-12`}
              >
                <h3>{report.candidateName}</h3>
                <p>Candidate</p>
              </div>
              <div
                className={`${style.divide_line} col-lg-3 col-md-3 col-sm-12 col-12`}
              >
                <h3>{getFullDate(report.interviewDate)}</h3>
                <p>Interview Date</p>
              </div>
              <div
                className={`${style.divide_line} col-lg-2 col-md-2 col-sm-12 col-12`}
              >
                <h3>{report.status}</h3>
                <p>Status</p>
              </div>
              <div
                className={`${style.modal_and_delete} col-lg-1 col-md-1 col-sm-12 col-12`}
              >
                <FaEye onClick={this.popOut} />
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={() => this.setState({ modalIsOpen: false })}
                >
                  <AdminReportModal
                    name={report.candidateName}
                    phase={report.phase}
                    date={getFullDate(report.interviewDate)}
                    company={report.companyName}
                    status={report.status}
                    note={report.note}
                  />
                </Modal>
                <TiDelete onClick={() => this.props.removeReport(report.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export { AdminSingleReport };
