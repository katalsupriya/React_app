import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};     
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let userName = event.target.username.value;
        let password = event.target.password.value;
        console.log(`Username is ${userName} and password is ${password}`);
 
      }
    render() {
        return (
            <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div id="login-column" className="col-md-4 card mx-auto border-0 shadow-lg">
                    <div id="login-box" className="col-md-12 card-body">
                        <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                            <h2 className="text-center text-primary">Sign Up</h2>
                            <div className="form-group mb-2">
                                <label htmlFor="email" className="text-primary">Email:</label><br/>
                                <input type="text" name="email" id="email" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password" className="text-primary">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirmPassword" className="text-primary">Confirm Password:</label><br/>
                                <input type="text" name="confirmPassword" id="confirmPassword" className="form-control" onChange={this.handleChange} />
                            </div>
                                <input value="Sign Up" type="submit" className="btn btn-primary btn-md w-100 text-white"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

