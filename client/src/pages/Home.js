import React, { Component } from "react";
import ValidatedLoginForm from "../components/ValidatedLoginForm";
import InfoCard from "../components/InfoCard";
import { Container, Row, Col } from "../components/Grid";

// import Saved from "../pages/Saved"
// import List from "../pages/list"

class Login extends Component {

  // Handles updating component state when the user types into the input field

  render() {
    return (
      <Container>
        <Row>
          <Col size="6">
            <InfoCard
              listOne="Manage your life in one convient spot."
              listTwo="Create and manage to do lists."
              listThree="Set your goals and don't forget them."
            ></InfoCard>
          </Col>
          <Col size="6">
            <Row>
              <Col size="12">
                <h2 className="font-weight-bold">Sign Up Here</h2>
                <h5 className="text-center">It's quick and easy</h5>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <ValidatedLoginForm />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;