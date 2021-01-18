import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

function HomeSider() {
  let { path } = useRouteMatch(); // useRouteMatch sẽ trả về 1 đối tượng

  const [mode, setMode] = useState("inline");

  function changeMode() {
    setMode(mode === "inline" ? "vertical" : "inline");
  }

  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode={mode}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Components">
          <Menu.Item key="1">
            {" "}
            <Link
              to={{ pathname: `${path}/input`, testState: "Hieu Khung" }}
              exact
            >
              Input
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link
              to={{ pathname: `${path}/table`, testState: "Hieu Khung Table" }}
            >
              Table
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            {" "}
            <Link to={`${path}/sider`}>Sider</Link>
          </Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default HomeSider;
