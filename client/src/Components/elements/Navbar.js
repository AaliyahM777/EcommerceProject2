import React from 'react';

/* created a  navbar functional component and it returns 
  how the navbar  links will dsiplay and look through bootstrap
  my icon on navbar
 */

function NavBar() {
    return(  
        <nav class="navbar navbar-expand-lg fixed-top ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar">
                <span class="navbar-toggler-icon">&#9776;</span>
            </button>

            <a class="navbar-brand" href="#"><img src="LogoMakr_1Igl02.png" class="img-fluid"/> </a>
            <div class="collaspe navbar-collapse" id="navigation-bar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> <a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"> <a class="nav-link" href="product.html">Our Products</a></li>
                    <li class="nav-item"> <a class="nav-link" href="contact.html">Contact Us </a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;