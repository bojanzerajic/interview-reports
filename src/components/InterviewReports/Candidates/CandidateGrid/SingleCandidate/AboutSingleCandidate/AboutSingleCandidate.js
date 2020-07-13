import React from "react";
import { Info } from "./Info/Info";
import { Reports } from "./Reports/Reports";
import { Header } from "../../../../Header/Header";
import { Footer } from "../../../../Footer/Footer";

class AboutSingleCandidate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidate: [],
      candidateId: null,
      reportList: [],
    };
  }

  fetchReports = () => {
    fetch(
      `http://localhost:3333/api/reports?candidateId=${this.props.match.params.id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((rawData) => this.setState({ reportList: rawData }));
  };

  componentDidMount() {
    fetch(`https://localhost:3333/api/candidates/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((candidateData) => {
        this.setState({
          candidate: candidateData,
          candidateId: this.props.match.params.id,
        });
      });

    this.fetchReports();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Info
            img={this.state.candidate.avatar}
            name={this.state.candidate.name}
            birthday={this.state.candidate.birthday}
            email={this.state.candidate.email}
            education={this.state.candidate.education}
          />
          <Reports reports={this.state.reportList} />
        </div>
        <Footer />
      </div>
    );
  }
}

export { AboutSingleCandidate };
