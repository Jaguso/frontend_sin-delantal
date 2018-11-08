import React, { Component } from 'react';

import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';

import {createDish} from '../../services';


class FormDish extends Component {

  constructor(props){
    super(props)
    this.state = {
      "name": "",
      "dish_description": "",
      "price": "",
      "photos": []
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
    console.log("Valores: ", name, value)
  }

  handleUploadSuccess = (filename)   => {
    Firebase
      .storage()
      .ref('dishes')
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
    
    let data = this.state
    
    let response = await createDish(data).catch(e => console.log(e))
  
    if(response){
      this.props.history.push('/')
    }
  }


  render(){
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <br/><br/>
          <h3>Crear Platillo </h3>
          <br/>
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="">Nombre del platillo:</label>
              <input 
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Descripción del platillo:</label>
              <input 
                type="text"
                name="dish_description"
                className="form-control"
                value={this.state.dish_description}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Precio:</label>
              <input 
                type="number"
                name="price"
                className="form-control"
                value={this.state.price}
                onChange={this.onChangeInput}
              />
            </div>
            <br/><br/>
            <div className="form-group">
              <label className="btn btn-info">
                Agrega una foto del platillo
                <FileUploader 
                  hidden
                  accept="image/*"
                  randomizeFilename
                  multiple
                  storageRef={Firebase.storage().ref('dishes')}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                />          
              </label>
            </div>

            <button type="submit" className="btn btn-success">Guardar platillo </button>

          </form>
        </div>

      </div>
    )
  }
}


export default FormDish;
