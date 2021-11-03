import { Component } from 'react';
import './App.css';


class App extends Component {
  render(){
    const name = 'goli'
    const loading = false
    const showName = true
    return (
      <div className="App">
        {loading ? <h4>loading...</h4> : <h2>Hello {showName ? name : null}</h2>}
      </div>
    );

  }
  
}

export default App;
