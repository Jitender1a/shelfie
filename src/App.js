import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import {Switch,Route} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
      constructor(){
        super()
        this.state={
            inventory:[]
        }
        this.handleChange=this.handleChange.bind(this);
      }


      componentDidMount(){
        axios.get('/api/inventory').then(response=>{
            this.setState({inventory:response.data})
        })
      }


      handleChange(event){
        this.setState({inventory:event.target.value})
      }
     
  render() {
    return (
    
    <div>
      <Dashboard/>
      <Header/>
      <Form/>  
      <input type="text" value={this.state.inventory} onChange={this.handleChange}/>
      <input></input>
      <input></input>
      <button> Cancel </button>
      <button> ADD </button>
    </div>
    
    );
  }
}
export default App;
