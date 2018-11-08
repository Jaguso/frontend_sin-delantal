import React, { Component } from 'react';
import FormAddressRestaurant from './FormAddressRestaurant';

class FormRestaurant extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      type_restaurant: "1",
      schedule: "",
      restaurant_description: "",
      // rate: "",
      photos: []
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
    // console.log("Evento: ", event.target)
    console.log("Valores: ", name, value)
  }

  render() {
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <br/><br/>
          <h3>Datos del restaurante </h3>
          <br/>
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="">Nombre del Restaurante:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Tipo de restaurante:</label>
              <select 
                name="type_restaurant"
                className="form-control"
                value={this.state.type_restaurant}
                onChange={this.onChangeInput}
              >
                <option value="1">Comida Mexicana</option>
                <option value="2">Comida Mexicana</option>
                <option value="3">Comida Mexicana</option>
                <option value="4">Comida Mexicana</option>
                <option value="5">Comida Mexicana</option>
                <option value="6">Comida Mexicana</option>
                <option value="7">Comida Mexicana</option>
                <option value="8">Comida Mexicana</option>
                <option value="9">Comida Mexicana</option>
                <option value="10">Comida Mexicana</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Descripción:</label>
              <input
                type="text"
                name="restaurant_description"
                className="form-control"
                value={this.state.restaurant_description}
                onChange={this.onChangeInput}
              />
            </div>
            <div>
              <label htmlFor="">Horario:</label>
              <input 
                type="text"
                name="schedule"
                className="form-control"
                value={this.state.schedule}
                onChange={this.onChangeInput}
              />
            </div>
            <div>
              <label>Agregar Imágenes</label>
            </div>
            <br/><br/>
            <h3>Ingresa la dirección del restaurante </h3>
            <br/>
            <FormAddressRestaurant />

            <button type="submit" className="btn btn-success">
              Crear Restaurante
            </button>
          </form>
          <br/><br/>
        </div>
      </div>
    )
  }
}



export default FormRestaurant;