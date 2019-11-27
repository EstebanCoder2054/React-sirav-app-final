import React, {Component} from "react";
import loginImg from "./login.svg";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

 class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            registro:{
                usuario: '',
                email: '',
                contraseña: ''
            },
            error: false
        };
    
    // dándole scope al handleChange event
     this.handleChange = this.handleChange.bind(this);
    
     // dándole scope al handleSubmit event
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            registro: {
                ...this.state.registro, //creando una copia del state
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('click en el botón');

        //validando que se hayan llenado los dos campos
        if(this.state.registro.usuario && this.state.registro.email && this.state.registro.contraseña){
            console.log(this.state.registro);  
            //enviando el registro al local storage
            localStorage.setItem("registro", JSON.stringify(this.state.registro));
            
            
            return(
                Swal.fire({
                    icon: 'success',
                    title: 'Registrated Successfully',
                    text: 'Now you have an account',
                    footer: '<a href="/login">Click here to go to the login view</a>'
                    })
            );
         
        }else{
            return(
                Swal.fire({
                icon: 'error',
                title: 'Oops... :(',
                text: 'You have to fill all the fields',
                footer: '<a href="/">Check the page without an user</a>'
                })
            );
        }

    
    }

  render(){
    return (
      <div className="base-container my-3">
        <div className="header">Hey, Join Us, Register Now!</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="imagen" />
          </div>
       
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="usuario" placeholder="username" onChange={this.handleChange} value={this.state.registro.usuario} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" onChange={this.handleChange} value={this.state.registro.email} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="contraseña" placeholder="password" onChange={this.handleChange} value={this.state.registro.contraseña} />
            </div>
          </div>
        
        </div>
        <Link to="/login">
            <p className="mt-2">already have an account? Click here to login</p>
        </Link>
        <div className="footer">
          <button onClick={this.handleSubmit} type="submit" className="btn">
            Register
          </button>
        </div>
      </div>
    );
    }
};

export default Register;
