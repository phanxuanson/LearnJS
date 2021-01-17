import React from "react";
import { Layout, Breadcrumb } from "antd";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import HomeSider from "./components/HomeSider";

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
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Switch>
              <Route
                path={`${path}/table`}
                render={(props) => {
                  return <div>Test Input</div>;
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
