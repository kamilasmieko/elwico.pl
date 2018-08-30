import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import '../scss/main.scss';
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
    FaAnchor
} from "react-google-maps";

import {MainTemplate} from "./maintemplate.jsx";
import {Main} from "./main.jsx";
import {Tv} from "./tv.jsx";
import {NotFound} from "./notfound.jsx";

function App(){
    return <Router history={hashHistory}>
                <Route path='/' component={MainTemplate}>
                    <IndexRoute component={Main}/>
                    <Route path='tv' component={Tv} />
                    <Route path='*' component={NotFound}></Route>
                </Route>
            </Router>
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});