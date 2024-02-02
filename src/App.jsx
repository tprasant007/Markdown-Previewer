import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const initialText = `# Heading\n
## Sub-Heading\n
[link-title](https://www.example.com)\n
An inline code \`<div></div>\`\n
\`\`\`
// a code block
function greetings() {
  console.log("Hello world")
}
\`\`\`
- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
> Block Quotes!\n
**A bold text**\n
An image\n![a black cat](https://images.unsplash.com/photo-1604253402434-76a3d93d22d6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

`;

  const [text, setText] = useState(initialText);

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <h1 className="title">Markdown Previewer</h1>
      <div className="editor-container">
        <textarea onChange={handleChange} value={text} id="editor"></textarea>
        <div id="preview" className="preview-container">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
      <p className="creator">Created By Prashant Thapa</p>
    </>
  );
}

export default App;
