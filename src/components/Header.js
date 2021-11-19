import React from "react";
import barImage from "./../img/bar.jpeg"

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <img className="header-image" src={barImage} alt="bar" />
        <h1>Tap Room</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;