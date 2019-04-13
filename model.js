import React, { Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//import { Form, FormGroup, Label, Input } from "reactstrap";
class M extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
          Create
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>
              <form />
              <input
                type="text"
                className="form-control-sm m-2"
                placeholder="Enter roll number"
                name="roll_no"
                value={this.state.roll_no}
                onChange={this.handleChange}
              />

              <input
                type="text"
                className="form-control-sm m-2"
                placeholder="Enter student name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.submitForm}
              >
                Submit
              </button>
              <br />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default M;
