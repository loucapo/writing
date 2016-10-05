import React from 'react';
import editor from './editorWrapper.css';
import { WKRichTextEditorContainer as RichTextEditorContainer } from 'wk-rich-text-editor-container';

export default () => (
  <div data-id="editor-wrapper" className={editor.editorWrapper} >
    <RichTextEditorContainer data-id="rich-text-editor"/>
  </div>);
