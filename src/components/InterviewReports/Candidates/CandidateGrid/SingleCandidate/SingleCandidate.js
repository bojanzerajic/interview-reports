import React from "react";
import style from "./SingleCandidate.module.scss";
import { Link } from "react-router-dom";

const SingleCandidate = (props) => {
  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 col-12 ${style.wrapper}`}>
      <Link to={`about-single-candidate/${props.id}`}>
        {props.image !== '' ? <img src={props.image} alt="avatar" /> :
        <img src='https://cdn.shopify.com/s/files/1/0066/0032/7268/products/product-image-1045467446_1200x1200.jpg?v=1569937306' alt="avatar" />}

        <h4>{props.name}</h4>
        <p>{props.email}</p>
      </Link>
    </div>
  );
};
export { SingleCandidate };
