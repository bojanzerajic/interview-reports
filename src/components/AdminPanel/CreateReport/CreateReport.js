import React from "react";
import style from "./CreateReport.module.scss";
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";
import { Footer } from "../../InterviewReports/Footer/Footer";
import { SelectCandidate } from "./SelectCandidate/SelectCandidate";
import { SelectCompany } from "./SelectCompany/SelectCompany";
import { ReportDetail } from "./ReportDetail/ReportDetail";
import { ReportSidebar } from "./ReportSidebar/ReportSidebar";
import { postReport } from "../../../services/postReport";

class CreateReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      candidateId: null,
      candidateName: null,
      companyId: null,
      companyName: null,
      interviewDate: null,
      phase: null,
      status: null,
      note: null,
    };
  }

  nextStep = () => {
    if (
      (this.state.step === 1 && this.state.candidateName !== null) ||
      (this.state.step === 2 && this.state.companyName !== null)
    ) {
      this.setState({ step: this.state.step + 1 });
    } else {
      alert("You must select something!");
    }
  };

  submitReport = () => {
    postReport(this.state);
    this.props.history.push("/admin/reports");
  };

  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  getName = (candidate) => {
    this.setState({ candidateName: candidate.name, candidateId: candidate.id });
  };

  getCompany = (company) => {
    this.setState({ companyName: company.name, companyId: company.id });
  };
  getInterviewDate = (date) => {
    this.setState({ interviewDate: new Date(date.value) });
  };

  getPhase = (phase) => {
    this.setState({ phase: phase.value });
  };

  getStatus = (status) => {
    this.setState({ status: status.value });
  };

  getNote = (note) => {
    this.setState({ note: note.value });
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <div>
            <HeaderAdmin />
            <div className="col-lg-12">
              <div className="row">
                <div className={`${style.sidebar_wrapper} col-lg-3`}>
                  <div className={style.sidebar_title}>
                    <ReportSidebar page={this.state.step} />
                  </div>
                </div>
                <div className="col-lg-9">
                  <SelectCandidate
                    nextStep={this.nextStep}
                    getName={this.getName}
                  />
                </div>
                <Footer />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <HeaderAdmin />
            <div className="col-lg-12">
              <div className="row">
                <div className={`${style.sidebar_wrapper} col-lg-3`}>
                  <div className={style.sidebar_title}>
                    <ReportSidebar page={this.state.step} />
                    <div className={style.bottom_sidebar_company}>
                      <h4 className="col-lg-12"> {this.state.candidateName}</h4>
                      <p className="col-lg-12">Candidate:</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <SelectCompany
                    getCompany={this.getCompany}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                  />
                </div>
                <Footer />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <HeaderAdmin />
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3">
                  <ReportSidebar page={this.state.step} />
                  <div className="row">
                    <div className={style.bottom_sidebar_report}>
                      <h4 className="col-lg-12"> {this.state.candidateName}</h4>
                      <p className="col-lg-12">Candidate:</p>
                      <h4 className="col-lg-12"> {this.state.companyName}</h4>
                      <p className="col-lg-12">Company:</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <ReportDetail
                    submitReport={this.submitReport}
                    getNote={this.getNote}
                    getStatus={this.getStatus}
                    getPhase={this.getPhase}
                    getInterviewDate={this.getInterviewDate}
                    prevStep={this.prevStep}
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        );

      default:
        return null;
    }
  }
}
export { CreateReport };
