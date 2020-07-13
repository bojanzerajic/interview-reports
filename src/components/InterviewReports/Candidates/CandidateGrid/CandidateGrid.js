import React from "react";
import { SingleCandidate } from "./SingleCandidate/SingleCandidate";
import style from "./CandidateGrid.module.scss";

class CandidateGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={`row ${style.wrapper}`}>
        {this.props.candidates.map((candidate, i) => (
          <SingleCandidate
            key={i}
            name={candidate.name}
            image={candidate.avatar}
            email={candidate.email}
            id={candidate.id}
          />
        ))}
      </div>
    );
  }
}
export { CandidateGrid };
