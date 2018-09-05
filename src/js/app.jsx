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
import {Internet} from "./internet.jsx";
import {Voip} from "./voip.jsx";
import {News} from "./news.jsx";
import {Contact} from "./contact.jsx";
import {SubscriberSite} from "./subscribersite.jsx";
import {Email} from "./email.jsx";
import {NotFound} from "./notfound.jsx";

function App(){
    return <Router history={hashHistory}>
                <Route path='/' component={MainTemplate}>
                    <IndexRoute component={Main}/>
                    <Route path='tv' component={Tv} />
                    <Route path='internet' component={Internet} />
                    <Route path='voip' component={Voip} />
                    <Route path='news' component={News} />
                    <Route path='contact' component={Contact} />
                    <Route path='subscribersite' component={SubscriberSite} />
                    <Route path='email' component={Email} />
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