import React, { Component } from 'react';


class CardRestaurant extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      name: props.name || "",
      id: props.id || "",
      image: props.image || ""
    }
  }

  render(){
    return(
      <div className="col-md-3">
        <div className="card">
          <img src={this.state.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <a href={`/restaurants/${this.state.id}`} className="btn btn-info">Ver Resturante</a>
           </div>
         </div>
       </div>
    )
  }
}
 

export default CardRestaurant;