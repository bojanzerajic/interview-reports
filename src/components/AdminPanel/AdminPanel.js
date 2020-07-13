import React from "react";
import { CreateReport } from "./CreateReport/CreateReport";
import { SelectCompany } from "./CreateReport/SelectCompany/SelectCompany";

class AdminPanel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <CreateReport />
        <SelectCompany />
      </div>
    );
  }
}

export { AdminPanel };
