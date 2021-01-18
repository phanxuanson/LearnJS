import React from "react";
import { Input } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";

function HomeAdminInput() {
  return (
    <>
      <>
        <Input
          size="large"
          placeholder="large size"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input placeholder="default size" prefix={<UserOutlined />} />
        <br />
        <br />
        <Input
          size="small"
          placeholder="small size"
          prefix={<UserOutlined />}
        />
      </>
    </>
  );
}

export default HomeAdminInput;
