import React from "react";
import { Layout } from "antd";
import "../assets/css/HomePage.css";
import "antd/dist/antd.css";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import HomeSideRouter from "./homepage/HomeSideRouter";
import { Switch, Route, Redirect } from "react-router-dom";

function HomePage(props) {
  return (
    <Layout className="layout">
      <HomeHeader></HomeHeader>
      <Switch>
        <Route path="/" exact render={() => <div>Test</div>}></Route>
        <Route
          path="/admin"
          render={(props) => <HomeSideRouter {...props}></HomeSideRouter>} // {key: value, key: value1, key2: value2}
        ></Route>
        <Redirect to="/admin"></Redirect>
      </Switch>
      <HomeFooter></HomeFooter>
    </Layout>
  );
}

export default HomePage;
