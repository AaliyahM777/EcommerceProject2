import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/index.css';
import '/Users/aaliyahmccray/Documents/EcommerceProject2/client/src/styles/generalstyles.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import App from './Components/pages/App';
import Products from './Components/pages/Products';
import Contacts from './Components/pages/Contacts';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div id="navbar">
            <ul>
                <li id="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/products" component={Products} />
            <Route path="/contacts" component={Contacts} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
