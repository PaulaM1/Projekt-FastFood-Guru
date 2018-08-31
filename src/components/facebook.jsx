import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
// import {Maps} from "./googlemaps.jsx";
import { Route, Redirect } from 'react-router'
import {HashRouter, Switch} from "react-router-dom";
require('./component.css');


class Facebook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture:''
        }
    }
    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email:response.email,
            picture: response.picture.data.url
        })
    }

    componentClicked = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }


    render() {
        let fbContent;
        const buttonSyle = {
            backgroundColor: "blue",
            color:"white",
            border: "none",
            textDecoration: "none",
            padding: "1px",
            width: "60px"

        }

        if(this.state.isLoggedIn){
            fbContent = (
                <div  className="fb_Logged">
                 <img src={this.state.picture} alt={this.state.name} />
                  <h5>Welcome {this.state.name}</h5>
                    <button style={buttonSyle} onClick={this.componentClicked} className="header__signIn">{this.state.isLoggedIn ? "Log Out" : "Log In"}</button>
                </div>

            );
        }else{
            fbContent = (

                <FacebookLogin
                    className = "fb_button"
                appId="276036649671903"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}

                />);

        }

        return (<div>
            {fbContent}
            </div>
        );
    }
}

export {Facebook}