import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEvents } from "../../actions/eventActions";

class Event extends Component {
  state = {
    showEventInfo: false,
  };

  onShowClick = () => {
    this.setState({
      showEventInfo: !this.state.showEventInfo,
    });
  };

  onDeleteClick = (id) => {
    this.props.deleteEvents(id);
  };

  render() {
    const { id, name, website } = this.props.event;
    const { showEventInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h3>
          Event name : {name}
          <i onClick={this.onShowClick} className="fas fa-angle-down" />
          <button
            type="button"
            onClick={this.onDeleteClick.bind(this, id)}
            style={{ float: "right", fontSize: "15px" }}
          >
            Delete
          </button>
        </h3>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Website : {website}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvents: PropTypes.func.isRequired,
};
export default connect(null, { deleteEvents })(Event);
