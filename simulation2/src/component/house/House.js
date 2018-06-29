import React from 'react';


export default function House(props){
    handleClick(){
        axios.delete(`/api/houses:${id}`).then(response =>{
            if(id===response.data.id){
                
            }
        })
    }

        return(
            <div className='house-component'
            onClick={()=>{this.handleClick()}}>
                House
            <button className='delete-button'>Delete</button>
        </div>
        )
}