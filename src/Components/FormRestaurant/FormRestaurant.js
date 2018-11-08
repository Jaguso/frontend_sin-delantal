import React, { Component } from 'react';
import FormAddressRestaurant from './FormAddressRestaurant';

import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';

import {createRestaurant} from '../../services';

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

  handleUploadSuccess = (filename) => {
    Firebase
      .storage()
      .ref('restaurants')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState(prevState => ({
          photos: [
            ...prevState.photos,
            url
          ]
        }))
      })
  }

  handleUploadError = (error) => {
    console.log(error)
  }

  formSubmit = async(e) => {
    e.preventDefault();
    
    // el refs aparece como props al llamar la componente FormAddressRestaurant
    let data = {
      ...this.state,
      address_restaurant: {...this.refs.address_restaurant.getState()},
    }
    
    let response = await createRestaurant(data).catch(e => console.log(e))
    
    if(response){
      this.props.history.push('/')
      console.log(response)
    }
    // console.log(this.state)
    // console.log(this.refs.address.getState())
    // console.log(this.refs.facilities.getState())
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
                <option value="2">Sushi</option>
                <option value="3">Comida Italiana</option>
                <option value="4">Comida China</option>
                <option value="5">Comida Rápida</option>
                <option value="6">Taquería</option>
                <option value="7">Comida Vegana</option>
                <option value="8">Pizzeria</option>
                <option value="9">Kebbabs</option>
                <option value="10">Café y Panadería</option>
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
              <label className="btn btn-info">
                Agregar Imágenes
                <FileUploader 
                  hidden
                  accept="image/"
                  randomizeFilename
                  multiple
                  storageRef={Firebase.storage().ref('restaurants')}
                  onUploadSuccess={this.handleUploadSuccess}
                />
              </label>
            </div>
            <br/><br/>
            <h3>Ingresa la dirección del restaurante </h3>
            <br/>
            <FormAddressRestaurant 
              ref="address_restaurant"
            />

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