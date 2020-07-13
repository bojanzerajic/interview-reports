import React from "react";
import { GoSearch } from "react-icons/go";
import style from "./SearchAdmin.module.scss";

const SearchAdmin = ({ searchedReports }) => {
  const change = (event) => {
    searchedReports(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <h2 className="col-lg-6">Reports</h2>
        <div className="col-lg-6">
          <span className={style.span}>
            <GoSearch />
          </span>
          <input
            className={style.input}
            onChange={change}
            placeholder="Search reports..."
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SearchAdmin;
