import React from "react";
import HomeAntdTable from "./HomeAntdTable";
import HomeAdminTabTable from "./HomeAdminTabTable";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function HomeAdminTable() {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Table" key="1">
          <HomeAdminTabTable></HomeAdminTabTable>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <HomeAntdTable></HomeAntdTable>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
}

export default HomeAdminTable;
