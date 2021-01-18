import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import axios from "axios";

const columns_ = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ngày Tạo",
    dataIndex: "createdAt",
    key: "createAt",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Bộ Phận",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (data) => {
      return <img src={data}></img>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function HomeAntdTable(props) {
  const [columns, setColumns] = useState(columns_);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://5f9b85e1856f4c00168c26e6.mockapi.io/users")
      .then((data) => {
        setData(data.data);
      });
  }, [columns]);

  return <Table columns={columns} dataSource={data} />;
}

export default HomeAntdTable;
