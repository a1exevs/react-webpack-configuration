import React from 'react';
import webpackLogo from 'src/logo.webpack.svg';
import reactLogo from 'src/logo.react.svg';
import 'src/App.less';

function App() {
  return (
    <div className="App">
      <label className="App-label">React + Webpack</label>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={webpackLogo} className="App-logo App-logo--small" alt="logo" />
      </header>
    </div>
  );
}

export default App;
