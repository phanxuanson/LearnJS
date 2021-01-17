import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

function HomeSider() {
  let match = useRouteMatch();
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
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
          <Menu.Item key="1">
            {" "}
            <Link to={`${match.url}/input`} exact>
              Input
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link to={`${match.url}/table`}>Table</Link>
          </Menu.Item>
          <Menu.Item key="3">
            {" "}
            <Link to={`${match.url}/sider`}>Sider</Link>
          </Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default HomeSider;
