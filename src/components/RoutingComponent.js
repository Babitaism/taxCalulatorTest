import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IncomeTax from "./IncomeTax";
import NoPage from "./NoPage";
import routing from "../configuration/routing.js";


function RoutingComponent(props) {

  function allRoutes() {
    let routeArr = [];
    for (let i in routing) {
      let component = routing[i].component;
      routeArr.push(
        <Route
          key={"routing" + i}
          path={routing[i].path}
          element={component}
        />
      );
    }
    routeArr.push(
        <Route
        key={"abc-incometax"}
        path="/"
        element={<IncomeTax/>}
      />,
      <Route
      key={"abc-incometax"}
      path="*"
      element={<NoPage/>}
    />,
    );
    return routeArr;
  }

    return (
      <>
        <BrowserRouter>
          <Routes>{allRoutes()}</Routes>
        </BrowserRouter>
      </>
    );
}

export default RoutingComponent;