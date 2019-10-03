// Index.js contains my react routing all imports from other components 

import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/aaliyahmccray/Documents/EcommerceProject2/client/src/styles/generalstyles.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Components/elements/Navbar';
import Footer from './Components/elements/Footer';
import App from './Components/pages/App';
import Products from './Components/pages/Products';
import Contacts from './Components/pages/Contacts';
import * as serviceWorker from './serviceWorker';

/* routing  varaible that contains all my pages that will be routed together 
including my navbar and footer components that will go along with each page*/
const routing = (
    <Router>
                
        <NavBar />
        <Route exact path="/" component={App} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contacts} />
        <Footer />
    </Router>
)

/* here we render everything in routing variable , and we get our element id tht is set to root from index.html
<div id="root"></div>
*/

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
