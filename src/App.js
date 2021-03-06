import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './users/Users';
import axios from 'axios'


class App extends Component {
  //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  state = {
    users : [],
    loading : true 
  }

  async componentDidMount(){
    this.setState({loading : true})

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    this.setState({users : res.data , loading :false})
  }



  render(){
    return (
      <div className="App">
       <Navbar />
       <div className="container">
       <Users loading={this.state.loading} users={this.state.users}/>
      </div>
      </div>
    );

  }
  
}

export default App;
