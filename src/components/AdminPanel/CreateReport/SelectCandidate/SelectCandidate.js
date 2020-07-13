import React from "react";
import { fetchCandidates } from "../../../../services/FetchAll";
import SearchCandidate from "../../SearchCandidate/SearchCandidate";
import style from "./SelectCandidate.module.scss";
import { SingleSelectedCandidate } from "./SingleSelectedCandidate/SingleSelectedCandidate.js";

class SelectCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      filteredCandidates: [],
    };
  }

  componentDidMount() {
    fetchCandidates("http://localhost:3333/api/candidates").then((candidates) =>
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
      <div className={style.wrapper}>
        <SearchCandidate searchedCandidates={this.searchedCandidates} />
        <div className={`${style.wrapper} col-lg-12`}>
          <div className={`${style.row_wrapper} row`}>
            {this.state.filteredCandidates.map((candidate, i) => (
              <SingleSelectedCandidate
                getName={this.props.getName}
                key={i}
                candidate={candidate}
              />
            ))}
          </div>
          <div className={style.btn_wrapper}>
            <button onClick={this.props.nextStep} className={style.btn}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { SelectCandidate };
