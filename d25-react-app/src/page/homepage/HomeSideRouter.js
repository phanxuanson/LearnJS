import React from "react";
import { Layout, Breadcrumb } from "antd";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import HomeSider from "./components/HomeSider";
import HomeAdminInput from "./components/HomeAdminInput";
import HomeAdminTable from "./components/HomeAdminTable";
import HomeAntdTable from "./components/HomeAntdTable";

const { Content } = Layout;

function HomeSideRouter(props) {
  const { path } = useRouteMatch();
  return (
    <>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <HomeSider></HomeSider>
          <Content style={{ padding: "0 24px", minHeight: "100vh" }}>
            <Switch>
              <Route
                path={`${path}/`}
                exact
                render={(props) => {
                  console.log(props);
                  return <h2>ADMIN PAGE</h2>;
                }}
              ></Route>
              <Route
                path={`${path}/input`}
                render={(props) => {
                  return <HomeAdminInput></HomeAdminInput>;
                }}
              ></Route>
              <Route
                path={`${path}/table`}
                render={(props) => {
                  return <HomeAdminTable></HomeAdminTable>;
                }}
              ></Route>
              <Route
                path={`${path}/antd-table`}
                render={(props) => {
                  return <HomeAntdTable></HomeAntdTable>;
                }}
              ></Route>
            </Switch>
          </Content>
        </Layout>
      </Content>
    </>
  );
}

export default HomeSideRouter;
