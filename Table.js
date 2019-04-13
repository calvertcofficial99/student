import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let TableData = this.props.TableData;
    return (
      <div className="container-fluid">
        <div className="row">
          <table
            className="table table-striped-light "
            style={{ backgroundColor: "#AFEEEE", borderColor: "#00FFFF" }}
          >
            <thead
              style={{ backgroundColor: "#008B8B", borderColor: "#00FFFF" }}
            >
              <tr>
                <th>ID</th>
                <th>Roll Number</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map(function(details, index) {
                if (details.name === "text") {
                  return (
                    <tr key={index} style={{ backgroundColor: "red" }}>
                      <th>{index + 1}</th>
                      <td>{details.roll_no}</td>
                      <td>{details.name}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{details.roll_no}</td>
                      <td>{details.name}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
