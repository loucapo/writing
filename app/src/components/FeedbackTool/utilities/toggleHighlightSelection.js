import { RichUtils, EditorState } from 'draft-js';

export default function(editorState, color) {

  const contentState = editorState.getCurrentContent();
  // not exactly clear on this yet but you need to get a new immutable
  // EditorState with a description of what happened in it.
  let nextEditorState = EditorState.push(
    editorState,
    contentState,
    'change-inline-style'
  );

  return RichUtils.toggleInlineStyle(nextEditorState, color);
}
