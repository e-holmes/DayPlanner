import React from "react";


function Login(props) {
    const showLogout = props.showLogin ? "form-group" : "form-group display-none";
    const hideLogoutButton = props.hideLogoutButton ? "display-none" : "display-block";
    return (
        <div >
            <div className={showLogout}>
                <form className="form-inline">
                    <input
                        name="loginEmail"
                        value={props.loginEmailValue}
                        onChange={props.handleInputChange}
                        className="form-control mr-sm-2"
                        type="email"
                        placeholder="Email"
                        aria-label="Email" />
                    <input
                        name="loginPass"
                        value={props.passwordValue}
                        onChange={props.handleInputChange}
                        className="form-control mr-sm-2"
                        type="password"
                        placeholder="Password"
                        aria-label="Password" />
                </form>
                <div>
                    <button id="login-button" onClick={props.onClick} className="btn btn-outline-success my-2" type="submit">login</button>
                </div>
            </div>
            <div className={hideLogoutButton}>
                <button onClick={props.onClickLogout} className="btn btn-outline-success my-2" type="submit">{props.buttonNameTwo}</button>
            </div>
        </div>
    )
}

export default Login;