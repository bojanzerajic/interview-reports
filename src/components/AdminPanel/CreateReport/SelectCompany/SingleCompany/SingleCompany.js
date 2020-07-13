import React from "react";
import style from "./SingleCompany.module.scss";

const SingleCompany = (props) => {
  return (
    <div onClick={() => props.getCompany(props.company)} className="row">
      <option className={`${style.company} col-lg-12`}>
        {props.company.name}
      </option>
    </div>
  );
};

export { SingleCompany };
