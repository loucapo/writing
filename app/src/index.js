import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { WKRichTextEditorContainer as RichTextEditorContainer } from 'wk-rich-text-editor-container';

const store = configureStore();

const editorDivStyle = {
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const RootWrapper = React.createClass({
  render() {
    return (
      <Root store={store} />
    );
  }
});

const EditorWrapper = React.createClass({
  render() {
    return (
      <div style={editorDivStyle} className="editor-wrapper">
        <RichTextEditorContainer store={store} />
      </div>
    );
  }
});

const PageNotFound = React.createClass({
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={RootWrapper} />
    <Route path="/editor" component={EditorWrapper} />
    <Route path="*" component={PageNotFound} />
  </Router>
), document.getElementById('root'));
