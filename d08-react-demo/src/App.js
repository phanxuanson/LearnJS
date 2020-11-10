import React from "react";
import Table from "./Table";

import { anhHieuTest, hieuKhung } from "./Test";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Table></Table>
        <div>{anhHieuTest}</div>
        <div>{hieuKhung}</div>
      </div>
    </div>
  );
}

export default App;
