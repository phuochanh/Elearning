import React from "react";
import { Tabs } from "antd";
import Unregistered from "./components/Unregistered";
import Registered from "./components/Registered";
import WaitingForApproval from "./components/WaitingForApproval";
export default function RegistrationManager() {
  const { TabPane } = Tabs;
  const tabs = [
    {
      label: "Chưa ghi danh",
      key: "1",
      children: <Unregistered />,
    },
    {
      label: "Đã ghi danh",
      key: "2",
      children: <Registered />,
    },
    {
      label: "Chờ xét duyệt",
      key: "3",
      children: <WaitingForApproval />,
    },
  ];

  return (
    <div>
      <h5>Danh sách người dùng </h5>
      <Tabs type="card">
        {tabs.map((tab) => (
          <TabPane tab={tab.label} key={tab.key}>
            {tab.children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
