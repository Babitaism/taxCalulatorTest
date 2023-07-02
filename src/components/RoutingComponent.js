import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OldRegime from "./OldRegime";
import NoPage from "./NoPage";
import routing from "../configuration/routing.js";
import NewRegime from "./NewRegime";

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
        element={<OldRegime/>}
      />,
      <Route
        key={"abc-incometax"}
        path="/newregime"
        element={<NewRegime/>}
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