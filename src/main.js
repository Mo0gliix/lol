const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App.js'); // Assuming the converted App component is in App.js
require('./index.css');

const rootElement = document.getElementById('root');
const rootComponent = React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
);

ReactDOM.createRoot(rootElement).render(rootComponent);
