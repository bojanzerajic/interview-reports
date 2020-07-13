import React from "react";
import { fetchCandidates } from "../../../services/FetchAll";
import { CandidateGrid } from "./CandidateGrid/CandidateGrid";
import Search from "./Search/Search";
import { Header } from "../Header/Header";
import {Footer} from '../Footer/Footer'

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      filteredCandidates: [],
    };
  }

  componentDidMount() {
    fetchCandidates("https://localhost:3333/api/candidates").then((candidates) =>
      this.setState({
        candidates: candidates,
        filteredCandidates: candidates,
      })
    );
  }

  searchedCandidates = (textInput) => {
    const newCandidate = this.state.candidates.filter((candidate) => {
      return candidate.name.toLowerCase().includes(textInput.toLowerCase());
    });
    this.setState({
      filteredCandidates: newCandidate,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search searchedCandidates={this.searchedCandidates} />
          <CandidateGrid candidates={this.state.filteredCandidates} />
        </div>
        <Footer />
      </div>
    );
  }
}
export { Candidates };
