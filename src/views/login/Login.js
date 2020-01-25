import React, { Component } from 'react';
import { withRouter } from 'react-router';
import InputElement from '../../components/input/InputElement';
import Button from '../../components/button/Button';
import { get } from '../../utils/services';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { get, createConection } from '../../utils/services';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            userName: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        
    }
    handleOnChange(event) {
        const { target: { value, id } } = event;
        this.setState({
            [id]: value
        })
    }
    handleOnSubmit(event) {
        event.preventDefault();
        const { userName, password } = this.state;
        if (userName === '' || password === '') {
            alert('Los datos de acceso son requeridos');
        } else {
            let connected = false;
            get('http://localhost:3000/users')
                .then(response => {
                    for (let i in response) {
                        if (response[i].userName === userName && response[i].password === password) {
                            connected = true;
                        }
                    }
                    if (connected) {
                        createConection(userName);
                        this.props.history.push('/articles');
                    } else {
                        window.alert('Los datos de conexión son incorrectos.');
                    }
                });
        }
    }
    render() {
        return (
            <div>
                <form className="container " onSubmit={this.handleOnSubmit}>                   
            <div className= "login-page rounded border">
                <form className="register-form" onSubmit={this.handleOnSubmit}>                    
                    <div className="form-group">
                        <InputElement
                            value={this.state.userName}
                            label="User"
                            placeholder="UserName"                                                                                                                                                                                                                                                                                                                                                                                              
                            type="text"                                                                                                                                                                                                                                                                                                                                                                                         
                            id="userName"
                            handleOnChange={this.handleOnChange}
                        />      
                    </div>
                    <div className="form-group">
                        <InputElement
                            value={this.state.password}
                            label="Password"
                            placeholder="Password"                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                            type="password" 
                            id="password"
                            handleOnChange={this.handleOnChange}
                        />      
                    </div>
                    <div className="btn btn-primary btn-sm">
                        <Button
                            id="1"
                            text="Login"
                            type="submit"
                            size="md"
                            color="primary"
                        />
                    </div>
                    <div className="btn btn-danger btn-md m-1">
                        <Link 
                            className="btn btn-danger btn-md m-1" 
                            to="./home"
                            >Cancelar
                        </Link>
                    </div>
                    <div className="button-center">
                    <Button
                        id="1"
                        text="Login"
                        type="submit"
                        size="md"
                        color="primary"
                    />
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </div>    
                </form>
            </div>
        );
    }
}

export default withRouter(Login);