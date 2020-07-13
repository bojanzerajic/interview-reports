import React from "react";
import { GoSearch } from "react-icons/go";
import style from "./SearchCompanies.module.scss";

const SearchCompanies = (props) => {
  return (
    <div>
      <div className="row">
        <h2 className="col-lg-6"> </h2>
        <div className="col-lg-6">
          <span className={style.span}>
            <GoSearch />
          </span>
          <input
            className={style.input}
            onChange={props.searchCompanies}
            type="search"
            placeholder="Search companies..."
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
export { SearchCompanies };
