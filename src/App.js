import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Candidates } from "./components/InterviewReports/Candidates/Candidates";
import { AboutSingleCandidate } from "./components/InterviewReports/Candidates/CandidateGrid/SingleCandidate/AboutSingleCandidate/AboutSingleCandidate";
import { Login } from "./components/AdminPanel/Login/Login";
import { ReportsAdministration } from "./components/AdminPanel/ReportsAdministration/ReportsAdministration";
import { CreateReport } from "./components/AdminPanel/CreateReport/CreateReport";

const App = withRouter(() => {
  if (!localStorage.getItem("token")) {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/about-single-candidate/:id/"
            component={AboutSingleCandidate}
          />
          <Route path="/admin" component={Login} />
          <Route exact path="/" component={Candidates} />
          <Redirect to="/admin" />
        </Switch>
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route
          path="/about-single-candidate/:id/"
          component={AboutSingleCandidate}
        />
        <Route path="/admin/reports" component={ReportsAdministration} />
        <Route path="/admin/create-report" component={CreateReport} />
        <Route path="/admin" component={Login} />
        <Route path="/" component={Candidates} />
      </Switch>
    </div>
  );
});

export default App;
