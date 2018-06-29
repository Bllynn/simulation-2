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
        //   console.log(houses.data)
          this.setState({
              houses:houses.data
          })
      })
  }
    


  
  
    render(){
        let houses = this.state.houses.map((e,id)=>{
              return(
                  <House/>
              )
          })
        return (
            <div className='dashboard-component'>
          Dashboard

          
          <button className='Add New Property'>
          <Link to ='/Wizard'>Add New Property</Link>
          </button>
        
          {houses}
          </div>
        )
        
    }
        
    
}