import React from "react";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>This is the Markdown Previewer</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <TextArea></TextArea>
      </div>
    </>
  );
}

export default App;
