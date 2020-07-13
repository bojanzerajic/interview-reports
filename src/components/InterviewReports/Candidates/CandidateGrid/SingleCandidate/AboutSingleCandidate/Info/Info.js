import React from "react";
import style from "./Info.module.scss";

const Info = (props) => {
  let dateOfBirth = new Date(props.birthday);
  let day = dateOfBirth.getDate();
  let month = dateOfBirth.getMonth();
  let year = dateOfBirth.getUTCFullYear();

  return (
    <div className={style.wrapper}>
      <div className={`${style.info_row} row`}>
        <div className="col-lg-4 col-md-12">
          {props.img !== '' ? <img
            className={style.info_img}
            src={props.img}
            alt="Candidate Avatar"
          />
            : <img
              className={style.info_img}
              src='https://cdn.shopify.com/s/files/1/0066/0032/7268/products/product-image-1045467446_1200x1200.jpg?v=1569937306'
              alt="Candidate Avatar"
            />}

        </div>
        <div className={`col-lg-4 col-md-6 ${style.name_and_email}`}>
          <p>
            <span>Name:</span>
            <br />
            {props.name}
          </p>
          <p>
            <span>Email:</span> <br />
            {props.email}
          </p>
        </div>
        <div className={`col-lg-4 col-md-6 ${style.dob_and_edu}`}>
          <p>
            <span>Date of birth: </span>
            <br />
            {day}.{month}.{year}.
          </p>
          <p>
            <span>Education: </span>
            <br /> {props.education}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export { Info };
