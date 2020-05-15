import React from "react";

function Navbar(props) {

  return (
    <nav className="navbar navbar-light bg-light height">
        <a className="navbar-brand" href="/">
          <img src={props.image} width="100" height="100" alt="logo" />
        </a>
        <h1 className="title-font text-center navbar-text">
          {props.title}
        </h1>
        <div classname="title-font">
          {props.login}
        </div>
    </nav>
  );
}

export default Navbar;
