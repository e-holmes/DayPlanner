import React, { Component } from "react";
import ValidatedLoginForm from "../components/ValidatedRegisterForm";
import style from "../assets/css/style.css"
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
            <div className="card">
              <h2 className="card-title mt-4 text-center">What can I do with this app?</h2>
              <ul className="list card-text">
                <li>Plan your month, week, and day</li>
                <li>Make to do lists</li>
                <li>Kepp an eye on your goals</li>
                <li>Track your budgets</li>
                <li>Plan your meals</li>
              </ul>
            </div>
          </Col>
          <Col size="6">
            <div className="card">
              <Row>
                <Col size="12">
                  <h2 className="font-weight-bold text-center">Sign Up Here</h2>
                  <h5 className="text-center">It's quick and easy</h5>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <ValidatedLoginForm />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;