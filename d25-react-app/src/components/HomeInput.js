import React from "react";
import { Layout, Menu, Breadcrumb, Input, Alert } from "antd";

function HomeInput() {
  const [text, settext] = useState("");
  function changeText(e) {
    settext(e.target.value);
  }
  return <div>Test Input Component</div>;
}

export default HomeInput;
