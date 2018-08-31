import React from 'react';
import ReactDOM from 'react-dom';
import {MapsAll} from './components/googlemaps.jsx';
import {Review} from './components/review.jsx';
import {Facebook} from "./components/facebook.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


require('./components/component.css');


class App extends React.Component {


    render() {
        return (
            <div>
                <div className="Logo_Navigation">
                <h1 className="Logo_Name">FastFood Guru</h1>
                </div>
                <div className="Main_Images">
                </div>
                <div className="All_Components">
                    <div>
                        <Facebook/>
                    </div>
                    <div className="Maps_Review">
                        <MapsAll/>
                    </div>
                    <div className="Review">
                        <Review/>
                    </div>
                </div>

                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Facebook}/>
                            <Route path='/maps' component={MapsAll}/>
                            <Route path='*' component={404}/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});