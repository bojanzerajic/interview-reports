import React from "react";
import style from "./SelectCompany.module.scss";
import axios from "axios";
import { SingleCompany } from "./SingleCompany/SingleCompany";
import { SearchCompanies } from "./SearchCompanies/SearchCompanies";

class SelectCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCompanies: [],
      filteredCompanies: [],
    };
  }
  searchCompanies = (event) => {
    const newCompany = this.state.listOfCompanies.filter((company) =>
      company.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ filteredCompanies: newCompany });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3333/api/companies")
      .then((companiesResponse) =>
        this.setState({
          listOfCompanies: companiesResponse.data,
          filteredCompanies: companiesResponse.data,
        })
      )
      .catch((error) => alert("Companies not found."));
  }
  render() {
    return (
      <div className={style.wrapper}>
        <SearchCompanies searchCompanies={this.searchCompanies} />
        <div className={` col-lg-12`}>
          <div className={`${style.row_wrapper} row`}></div>
          {this.state.filteredCompanies.map((company, i) => (
            <SingleCompany
              key={i}
              getCompany={this.props.getCompany}
              company={company}
            />
          ))}
          <div className={style.btn_wrapper}>
            <button onClick={this.props.prevStep} className={style.btn}>
              Back
            </button>
            <button onClick={this.props.nextStep} className={style.btn}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export { SelectCompany };
