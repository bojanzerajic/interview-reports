import React from "react";
import style from "./Search.module.scss";
import { GoSearch } from "react-icons/go";

const Search = ({ searchedCandidates }) => {
  const change = (event) => {
    searchedCandidates(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <div className="row">
        <h2 className={`${style.h2} col-lg-6`}>Candidates</h2>
        <div className="col-lg-6">
          <span className={style.span}>
            <GoSearch />
          </span>
          <input
            className={style.input}
            onChange={change}
            placeholder="Search candidates..."
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Search;
