import React, { Component } from "react";

class Addevent extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.regionInput = React.createRef();
    this.fieldInput = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    const event = {
      name: this.nameInput.current.value,
      region: this.regionInput.current.value,
      field: this.fieldInput.current.value,
    };
    console.log(event);
  };
  static defaultProps = {
    name: "Conference",
    region: "TamilNadu",
    field: "Politics",
  };

  render() {
    const { name, region, field } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">AddEvent</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your name"
                name="name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input
                type="text"
                name="region"
                className="form-control form-control-lg"
                placeholder="Enter your Region"
                defaultValue={region}
                ref={this.regionInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="field">Field</label>
              <input
                type="text"
                name="field"
                className="form-control form-control-lg"
                placeholder="Enter your Field"
                defaultValue={field}
                ref={this.fieldInput}
              />
            </div>
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
export default Addevent;
