import React, { Component } from "react";
import {Container, Row, Col} from "../components/Grid";
import Table from "../components/Table";
import Goals from "../components/Goals";

// import Saved from "../pages/Saved"
// import List from "../pages/list"

class Login extends Component {

  // Handles updating component state when the user types into the input field

  render() {
    return (
      <Container>
        <Row>
          <Col size="6">
            <Table
          
            ></Table>
          </Col>
          <Col size="6">
            <Row>
              <Goals></Goals>
            </Row>
            <Row>
              <p>To Do</p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;