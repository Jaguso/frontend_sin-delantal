import React, { Component } from 'react';
import CardRestaurant from '../Cards/CardRestaurant';
import {getRestaurants} from '../../services';

class Home extends Component {
  
  constructor(){
    super();
    this.state = {
      restaurants: [],
      isLoading: true
    }
  }

  componentDidMount(){
    getRestaurants().then((response) => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  renderRestaurants = () => {
    return this.state.restaurants.map(
      (restaurant) => (
        <CardRestaurant id={restaurant.id} name={restaurant.name} 
        image={restaurant.photos ? restaurant.photos[0] : null}/>
      )
    )
  }

  render(){
    return (
      <div className="row">
        <h2 className="mb-4">Restaurantes </h2>
        <div className="row">
          {
            (this.state.isLoading) ? (<h4>Cargando...</h4>) : this.renderRestaurants()
          }
        </div>
       </div>
    )
  }
}


export default Home;