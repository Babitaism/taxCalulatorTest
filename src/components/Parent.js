import React from "react";
import RoutingComponent from "./RoutingComponent";
import NavBar from "./NavBar";

function Parent() {
  return (
    <div>
      <NavBar />
      <RoutingComponent />
    </div>
  );
}

export default Parent;
