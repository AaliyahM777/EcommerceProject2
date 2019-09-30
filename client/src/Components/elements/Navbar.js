import React from 'react';


/* created a  navbar functional component and it returns 
  how the navbar  links will dsiplay and look through bootstrap
  my icon on navbar
 */

function NavBar() {
    return(  
        <nav className="navbar navbar-expand-lg fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar">
                <span className="navbar-toggler-icon">&#9776;</span>
            </button>

            <a className="navbar-brand" href="#"><img src="LogoMakr_1Igl02.png" class="img-fluid"/> </a>
            <div className="collaspe navbar-collapse" id="navigation-bar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"> <a className="nav-link" href="index.html">Home</a></li>
                    <li className="nav-item"> <a className="nav-link" href="product.html">Our Products</a></li>
                    <li className="nav-item"> <a className="nav-link" href="contact.html">Contact Us </a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;