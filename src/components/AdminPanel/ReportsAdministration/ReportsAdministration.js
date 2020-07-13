import React from "react";
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";
import { ListOfReports } from "./ListOfReports/ListOfReports.js";
import { Footer } from "../../InterviewReports/Footer/Footer";

class ReportsAdministration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderAdmin />
        <ListOfReports />
        <Footer />
      </div>
    );
  }
}
export { ReportsAdministration };
