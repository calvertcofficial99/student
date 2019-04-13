import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TableData: [],
      temp: {
        roll_no: "",
        name: ""
      },
      modal: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    console.log("am i mounted");
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:8080/");
    xmlhttp.send();
    xmlhttp.onload = function () {
      let serverData = JSON.parse(xmlhttp.responseText);
      console.log(serverData);
      this.setState({
        TableData: serverData
      });
      console.log(this.state.TableData);
      console.log(this.state);
    }.bind(this);
  }


  submitForm(state1) {
    if (state1.roll_no != "" || state1.name != "") {
      let initial_state = {
        roll_no: "",
        name: ""
      };
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open('POST', 'http://localhost:8080/');
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
      xmlhttp.send(state1);
      console.log("state1");
      console.log(state1);
      let temp_array = [this.state.TableData];
      temp_array.push(state1);

      this.setState({
        TableData: temp_array,
        modal: false,
        temp: initial_state
      });

      console.log(state1);
    } else {
      console.log(state1);
      return alert("enter details");
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="m-4">
          <Form
            toggle={this.toggle}
            modal={this.state.modal}
            submitForm={this.submitForm}
          />
        </div>
        <div className="m-4">
          <Table TableData={this.state.TableData} />
        </div>
      </div>
    );
  }
}

export default App;
