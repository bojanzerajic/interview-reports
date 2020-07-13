import React from "react";
import { Link } from "react-router-dom";
import style from "./HeaderAdmin.module.scss";

const HeaderAdmin = () => {
  return (
    <div className={style.wrapper}>
      <div className="row">
        <h1 className={`${style.main_title} col-lg-6`}>
          Reports Administration
        </h1>
        <div className="col-lg-6">
          <div className={`${style.btn_wrapper} row`}>
            <Link className={`col-lg-3 ${style.btn}`} to="/admin/reports">
              Reports
            </Link>
            <Link className={`col-lg-3 ${style.btn}`} to="/admin/create-report">
              Create Report
            </Link>
            <Link onClick={()=> localStorage.removeItem('token')} className={`col-lg-3 ${style.btn}`} to="/">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderAdmin };
