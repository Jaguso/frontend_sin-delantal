import React, { Component } from 'react';
import {loginUser} from '../../services';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "", 
      password: ""
    }
  }
  onChangeInput = (event) => {
    const {name, value} = event.target
    // console.log("Evento: ", event.target)
    console.log("Valores: ", name, value)
    this.setState({[name]: value})  //obs: el input debe tener el mismo nombre que el estado
  }

  onSubmit = async (event) => {
    event.preventDefault();

    let response = await loginUser(this.state)
                            .catch(() => alert(response.data.message))
    if(response){
      const {token} = response.data
      console.log(response)
      console.log(token)
      localStorage.setItem('sindelantalToken', token) //esto guarda el {key, value} que pusimos en localStorage (una pequeña base de datos en la pag web)
      this.props.history.push('/') //esto hace que regresemos a home despues de hacer login
    }
  }

  render() {
    let {email, password} = this.state
    return(
      <div className="row justify-content-center">
        <div className="col-md-9">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="" >Email:</label>
              <input type="email" className="form-control" name="email" value={email} onChange={this.onChangeInput} />
            </div>
            <div>
              <label htmlFor="">Password:</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.onChangeInput}/>
            </div>
            <button type="submit" className="btn btn-success">Enviar</button>
           </form>
         </div>
      </div>
    )
  }
}

export default Login;