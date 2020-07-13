import React from "react";
import style from "./SearchCandidate.module.scss";
import { GoSearch } from "react-icons/go";
import "./SearchCandidate.module.scss";

const SearchCandidate = ({ searchedCandidates }) => {
  const change = (event) => {
    searchedCandidates(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <div className="row">
        <div className={`${style.empty_div} col-lg-6`}></div>
        <div className="col-lg-6">
          <span className={style.span}>
            <GoSearch />
          </span>
          <input
            className={style.input}
            onChange={change}
            placeholder="Search..."
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SearchCandidate;
