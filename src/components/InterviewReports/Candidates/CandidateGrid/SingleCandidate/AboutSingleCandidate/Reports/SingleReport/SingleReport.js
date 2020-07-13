import React from "react";
import { FaEye } from "react-icons/fa";
import { ReportModal } from "../ReportModal/ReportModal";
import Modal from "react-modal";
import style from "./SingleReport.module.scss";

class SingleReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  popOut = () => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    return (
      <tr>
        <td>{this.props.company}</td>
        <td>{this.props.date}</td>
        <td>{this.props.status}</td>
        <td className={style.charlie}>
          <FaEye onClick={this.popOut} />
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.setState({ modalIsOpen: false })}
          >
            <ReportModal
              name={this.props.name}
              phase={this.props.phase}
              date={this.props.date}
              company={this.props.company}
              status={this.props.status}
              note={this.props.note}
            />
          </Modal>
        </td>
      </tr>
    );
  }
}
export { SingleReport };
