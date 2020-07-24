import React, { useState } from "react";
import DOMPurify from "dompurify";

const marked = require("marked");
const TextArea = () => {
  const [text, setText] = useState(
    "# Welcome to my React Markdown Previewer!\n## This is a sub-heading... \n`<div></div>`, between 2 backticks.\n```\nlet s = 5// this is multi-line code:\n```\n**bold**There's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n- And of course there are lists.\n- Some are bulleted.\n1. And there are numbererd lists too.1. Use just 1s if you want! 1. But the list goes on...![React Logo w/ Text](https://goo.gl/Umyytc)"
  );
  const changeText = (e) => {
    setText(e.target.value);
  };
  let dirty = marked(text);
  let clean = DOMPurify.sanitize(dirty);
  return (
    <React.Fragment>
      <textarea
        id="editor"
        onChange={changeText}
        style={{ width: 500, height: 500 }}
      >
        {text}
      </textarea>

      <div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: clean }}></div>
        <p>Result Text</p>
      </div>
    </React.Fragment>
  );
};

export default TextArea;
