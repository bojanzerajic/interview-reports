import React from "react";
import style from "./SingleSelectedCandidate.module.scss";

class SingleSelectedCandidate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className={`${style.candidate} col-lg-6 `}
        id={this.props.id}
        onClick={() => this.props.getName(this.props.candidate)}
      >
        <div className="row">
          <div className={`${style.img} col-lg-2`}>
            {this.props.candidate.avatar !== '' ? <img src={this.props.candidate.avatar} alt="" />
              : <img src='https://cdn.shopify.com/s/files/1/0066/0032/7268/products/product-image-1045467446_1200x1200.jpg?v=1569937306' alt="" />}
          </div>
          <div className="col-lg-10">
            <h2 className="col-lg-12">{this.props.candidate.name}</h2>
            <p className="col-lg-12">{this.props.candidate.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { SingleSelectedCandidate };

