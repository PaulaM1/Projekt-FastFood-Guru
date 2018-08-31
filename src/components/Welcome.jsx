import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom'

class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state={
            redirectToReferrer: false
        }
        // this.signup = this.signup.bind(this);
    }

    // signup(res, type){
    //
    //     let postData;
    //     if(type === 'facebook' && res.email){
    //         postData = {name: res.name, provider: type, email: res.email, provider_id: res.id, token:res.accessToken, provider_pic: res.provider_pic}
    //     }
    //
    //     if(type === 'google' && res.w3.U3){
    //         postData = {name: res.w3.ig, provider: type, email: res.w3.U3, provider_id: res.El, token:res.Zi.access_token, provider_pic: res.w3.Paa}
    //     }
    //
    // }

    render() {

        if(this.state.redirectToReferrer){
            return (<Redirect to={'./Home'}/>)
        }

        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'facebook');
        }

        const responseFacebook = (response) => {
            console.log(response);
            this.signup(response, 'google');
        }


        return (
            <div>
               <h2 id="WelcomeText">Sign up...</h2>

                <GoogleLogin
                    clientId="874752778221-2cpcvjio1hh4h5qup59ces7hmtma2fa2.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />

                <FacebookLogin
                    appId="276036649671903"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook} />


                <a href="/login" className="button">Login</a>
                <a href="/signup" className="button_success">Signup</a>
            </div>

        );
    }
}

export {Welcome}