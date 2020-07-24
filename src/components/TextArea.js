import React, { useState } from "react";

const marked = require("marked");
const TextArea = () => {
  const [text, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  return (
    <React.Fragment>
      <textarea id="editor" onChange={changeText}>
        {/* <div>
          <h1>This is h1</h1>
          <h2>This is h2</h2>
          <a href="www.google.com" target="_blank" rel="noopener">
            This is link
          </a>
        </div> */}
      </textarea>
      ;
      <div id="preview">
        <p>Result Text</p>
        {/* {text} */}
        {marked(text)}
      </div>
    </React.Fragment>
  );
};

export default TextArea;
