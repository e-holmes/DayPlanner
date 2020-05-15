import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Row, Col } from "../Grid";
import ValidatedLoginForm from "../ValidatedLoginForm"
// import { Link } from "react-router-dom";

class Registration extends Component {

    // Setting the component's initial state
    // state = {
    //     username: "",
    //     password: "",
    //     email: ""
    // };

    // handleInputChange = event => {
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value } = event.target;

    //     // Updating the input's state
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();

    //     if (this.state.password.length >= 6) {
    //         if (this.state.username && this.state.password && this.state.email) {
    //             API.saveUser({
    //                 userName: this.state.username,
    //                 password: this.state.password,
    //                 email: this.state.email

    //             })
    //                 .catch(err => console.log(err));

    //             this.setState({
    //                 username: "",
    //                 password: "",
    //                 email: ""

    //             })
    //         }
    //     } else {
    //         alert("Password too short");
    //     }
    // };

    render() {
        return (
            <div className="card">
                <Row>
                    <Col size="12">
                        <h2 className="font-weight-bold">Sign Up Here</h2>
                        <h5 className="text-center">It's quick and easy</h5>
                    </Col>
                </Row>
                <div className="bubble">
                </div>
                <Row>
                    <Col size="12">
                        <ValidatedLoginForm/>
                        {/* <form className="form align-content-center">
                            <div className="inputForm">
                                <Col size="md-6" className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder=""
                                        className="form-control"
                                    />
                                </Col>
                                <Col size="md-6" className="form-group">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder=" "
                                        className="form-control"
                                    />
                                </Col>
                                <Col size="md-6" className="form-group">
                                    <label htmlFor="inputemail">Email</label>
                                    <input
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder=""
                                        className="form-control"
                                    />
                                </Col>
                            </div>
                            <div className="submit-btn">
                                <button className="btn btn-success align-self-center" onClick={this.handleFormSubmit}>Submit</button>
                            </div>
                        </form> */}
                        {/* <div id="message">
                            <h3>Password must contain the following:</h3>
                            <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                            <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                            <p id="number" className="invalid">A <b>number</b></p>
                            <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                        </div> */}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Registration;
