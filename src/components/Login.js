import React, {Component} from "react";
import loginImg from "./login.svg";
import './style.scss';
import Swal from 'sweetalert2';


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            usuarioObtenido:''
        };
    
        // dándole scope al handleChange event
        this.handleChange = this.handleChange.bind(this);
    
        // dándole scope al handleSubmit event
       this.handleSubmit = this.handleSubmit.bind(this);
       
    
    };

    componentDidMount(){
        
    let usuarioObtenido = JSON.parse( localStorage.getItem("registro") );
    //console.log(usuarioObtenido);
    this.setState({
        usuarioObtenido: usuarioObtenido
    })

    }

    handleChange(e){
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('haz clickeado en el botón de login');
        console.log(this.state.usuarioObtenido.usuario);

        //validando que no sea un usuario administrador, registrado o no registrado (éstos son usuarios de prueba)
        if(this.state.username === 'admin' && this.state.password === '123'){
            return(
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Successfully',
                    text: 'You are the Administrator',
                    footer: '<a href="/">Click here to go to the page as an admministrator</a>'
                    })
            );
        }else if(this.state.username === 'userRegistered' && this.state.password === '123'){
            return(
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Successfully',
                    text: 'You are an Registered user',
                    footer: '<a href="/">Click here to go to the page as an Registered User</a>'
                    })
            );
          }
        else if(this.state.username === this.state.usuarioObtenido.usuario && this.state.password === this.state.usuarioObtenido.contraseña){
            return(
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Successfully',
                    text: `Welcome, ${this.state.usuarioObtenido.usuario}`,
                    footer: '<a href="/">Click here to go to the page as an Registered User</a>'
                    })
            );
        }
    }
   
    render(){
         
    return (
      <div className="base-container mt-3">
        <div className="header">C'mon, Log-In, it's totally free</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="imagen" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.handleChange} value={this.state.username} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn mb-3" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </div>
    );
    }
};

export default Login;
