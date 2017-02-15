import React, { Component } from 'react';
import FloatingMenu from './components/FloatingMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        Check the floating menu thingy at the bottom
        <FloatingMenu />
      </div>
    );
  }
}

export default App;
