import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './users/UserItem';


class App extends Component {
  render(){
   
    return (
      <div className="App">
       <Navbar />
       <UserItem />
      </div>
    );

  }
  
}

export default App;
