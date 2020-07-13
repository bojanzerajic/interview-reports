import React from "react";
import "./ListOfReports.css";
import { AdminSingleReport } from "./AdminSingleReport/AdminSingleReport";
import { fetchReports } from "../../../../services/FetchAll";
import SearchAdmin from "../SearchAdmin/SearchAdmin.js";
import { deleteReport } from "../../../../services/deleteReport";

class ListOfReports extends React.Component {
  constructor() {
    super();
    this.state = {
      reports: [],
      filteredReports: [],
    };
  }

  componentDidMount() {
    fetchReports().then((reports) =>
      this.setState({
        reports: reports,
        filteredReports: reports,
      })
    );
  }
  removeReport = (id) => {
    deleteReport(id);
    fetchReports("http://localhost:3333/api/reports").then((reports) =>
      this.setState({
        reports: reports,
        filteredReports: reports,
      })
    );
  };

  searchedReports = (textInput) => {
    const newReport = this.state.reports.filter((report) => {
      return report.candidateName
        .toLowerCase()
        .includes(textInput.toLowerCase());
    });
    this.setState({
      filteredReports: newReport,
    });
  };

  render() {
    return (
      <div className="container">
        <SearchAdmin searchedReports={this.searchedReports} />
        <AdminSingleReport
          reports={this.state.filteredReports}
          removeReport={this.removeReport}
        />
      </div>
    );
  }
}

export { ListOfReports };
