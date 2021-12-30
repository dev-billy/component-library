import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";
import TextEditorStyles from "./textEditorstyles.module.scss";
import parse from "html-react-parser";

export default function TextEditor(props) {
  const { preview } = props;
  const [text, setText] = useState("");
  return (
    <div className={TextEditorStyles.main}>
      <div className={TextEditorStyles.editor}>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
      </div>
      {preview && (
        <div>
          <h2>Preview</h2>
          <p>{parse(text)}</p>
        </div>
      )}
    </div>
  );
}

TextEditor.propTypes = {
  preview: PropTypes.bool,
};

TextEditor.defaultProps = {
  preview: true,
};
