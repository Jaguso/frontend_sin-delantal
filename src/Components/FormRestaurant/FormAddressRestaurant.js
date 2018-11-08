import React, {Component} from 'react';


class FormAddressRestaurant extends Component {

  constructor() {
    super();
    this.state = {
      street: "",
      number: "",
      zipcode: "",
      district: "",
      city: "" 
    }

  } 

  onChangeInput = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})  //obs: el input debe tener el mismo nombre que el estado
    // console.log("Evento: ", event.target)
    console.log("Valores: ", name, value)
  }

  getState = () => this.state

  render() {
    return(
      <div>
        <div className="form-group">
          <label htmlFor="">Calle:</label>
          <input 
            type="text"
            name="street"
            className="form-control"
            value={this.state.street}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Número:</label>
          <input 
            type="number"
            name="number"
            className="form-control"
            value={this.state.number}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Código postal:</label>
          <input 
            type="text"
            name="zipcode"
            className="form-control"
            value={this.state.zipcode}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Colonia:</label>
          <input 
            type="text"
            name="district"
            className="form-control"
            value={this.state.district}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ciudad:</label>
          <input 
            type="text"
            name="city"
            className="form-control"
            value={this.state.city}
            onChange={this.onChangeInput}
          />
        </div>
      </div>
    )
  }
}

export default FormAddressRestaurant;