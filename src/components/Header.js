import React from "react";
import dogImage from "./../img/dogs.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={dogImage} width="200" alt=" Two poodles." />
    </React.Fragment>
  );
}

export default Header;