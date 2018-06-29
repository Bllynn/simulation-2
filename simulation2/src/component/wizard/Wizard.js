import React, {Component} from 'react';
import route from '../../route';
import {Link} from 'react-router-dom';


class Wizard extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zipCode:''
            }
    
    }
    handleChangeName=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handleChangeAddress=(event)=>{
        this.setState({
            address: event.target.value
        })
    }
    handleChangeCity=(event)=>{
        this.setState({
            city: event.target.value
        })
    }
    handleChangeState=(event)=>{
        this.setState({
            state: event.target.value
        })
    }
    handleChangeZipCode=(event)=>{
        this.setState({
          zipCode: event.target.value
        })
    }


    render(){
        return(
            <div className='wizard-component'>
            Add New Listing<br></br>
            <button className='cancelButton'
            ><Link to='/'>Cancel</Link>
            </button>
            Name:
            <input type="text"className='name-input'
            value={this.state.name}
            onChange={this.handleChangeName}/>
            Address:
            <input type="text"className='address-input'
            value={this.state.address}
            onChange={this.handleChangeAddress}/>
            City:
            <input type="text"className='city-input'
            value={this.state.city}
            onChange={this.handleChangeCity}/>
            State:
            <input type="text"className='state-input'
            value={this.state.state}
            onChange={this.handleChangeState}/>
            Zip:
            <input type="number"className='zipCode-input'
            value={this.state.zipCode}
            onChange={this.handleChangeZipCode}/>
            
            <button className='complete-button'>Complete</button>
            </div>
        )
    }
}
export default Wizard