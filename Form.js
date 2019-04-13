import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roll_no: "",
      name: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button color="success" onClick={this.props.toggle}>
          {this.props.buttonLabel}
          Add Student
        </Button>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className="float-center"
        >
          <ModalHeader
            style={{ backgroundColor: "#32CD32", borderColor: "#006400" }}
            toggle={this.props.toggle}
          >
            Enter Student Details
          </ModalHeader>
          <ModalBody
            body
            inverse
            style={{
              backgroundColor: "#DCDCDC",
              borderColor: "#DCDCDC",
              fontSize: 17
            }}
          >
            <div className="col">
              <div className="row">
                <label className="m-2">
                  Student Roll Number
                  <br />
                  <input
                    type="text"
                    className="form-control sm"
                    placeholder="Enter roll number"
                    name="roll_no"
                    value={this.props.roll_no}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="row">
                <label className="m-2">
                  Name
                  <br />
                  <input
                    type="text"
                    className="form-control sm "
                    placeholder="Enter Student name"
                    name="name"
                    value={this.props.name}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            
              <div className="row">
                <button
                  type="button"
                  className="btn btn-success m-2"
                  onClick={() => {
                    return(
                        this.props.submitForm(this.state)
                        
                      ) 
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Form;
