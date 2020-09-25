import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvents } from "../../actions/eventActions";

class Addevent extends Component {
  state = {
    name: "",
    website: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, website } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }
    if (website === "") {
      this.setState({ errors: { website: "Website is Required" } });
      return;
    }

    const newEvent = {
      name,
      website,
    };
    this.props.addEvents(newEvent);
    //clear state
    this.setState({
      name: "",
      website: "",

      errors: {},
    });
    this.props.history.push("/");
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const { name, website, errors } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">AddEvent</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Website"
              name="website"
              placeholder="Enter Website"
              value={website}
              onChange={this.onChange}
              error={errors.website}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
Addevent.propTypes = {
  addEvents: PropTypes.func.isRequired,
};
export default connect(null, { addEvents })(Addevent);
