import React from "react";
import { Layout, Menu, Alert, Button } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function HomeHeader() {
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link to="/admin">Admin</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}

export default HomeHeader;
