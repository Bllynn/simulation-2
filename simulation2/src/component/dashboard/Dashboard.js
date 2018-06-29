import React, {Component} from 'react';
import House from '../house/House';
import Wizard from '../wizard/Wizard';
import {Link} from 'react-router-dom';
export default class Dashboard extends Component{
  constructor(){
      super()
      this.state={
          houses:[]
      }
        
  }
  //componentDidMount(){
      req
  }
  
  
    render(){

        return (
            <div className='dashboard-component'>
          Dashboard
          <button className='Add New Property'>
          <Link to ='/Wizard'>Add New Property</Link>
          </button>
        
          <House/>
          </div>
        )
        
    }
        
    
}