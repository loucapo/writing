import React from 'react';
import editor from './editorWrapper.css';
import { WKRichTextEditorContainer as RichTextEditorContainer } from 'wk-rich-text-editor-container';

export default () => (
  <div className={editor.editorWrapper} >
    <RichTextEditorContainer />
  </div>);
