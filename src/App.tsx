import React from "react";
import "./App.css";
import { Button } from "./packages";

function App() {
  return (
    <div>
      <Button variant="primary" iconEnd="x" iconStart="z">
        Hello
      </Button>
      {/* <br />
      <br />
      <br />
      <Input iconStart={"x"} iconEnd={"z"} variant="primary" /> */}
    </div>
  );
}

export default App;
