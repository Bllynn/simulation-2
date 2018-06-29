import React, {Component} from 'react';
import House from '../house/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component{
  constructor(){
      super()
      this.state={
          houses:[]
      }
        
  }
  componentDidMount() {
      axios.get('/api/houses').then((houses)=>{
          this.state.houses.map((e,id)=>{
            return(
                <div key={id}>{e.name}{e.address}{e.city}{e.state}{e.zipCode} </div>
            )
        })
      })
    }


  
  
    render(){
        // let houses = this.state.houses.map((e,id)=>{
        //       return(
        //           <div key={id}>{e.name}{e.address}{e.city}{e.state}{e.zipCode} </div>
        //       )
        //   })

        return (
            <div className='dashboard-component'>
          Dashboard
          {componentDidMount}

          
          <button className='Add New Property'>
          <Link to ='/Wizard'>Add New Property</Link>
          </button>
        
          <House/>
          </div>
        )
        
    }
        
    
}