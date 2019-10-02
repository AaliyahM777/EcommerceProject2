import React from 'react';
import NavBar from '../elements/Navbar';
import Footer from '../elements/Footer';


function Contacts() {
    return (
        <div>
            <body>
                <div className="container2">
                    <header>
                        <h1> Need More Information?</h1>
                        <h2> Contact Us!</h2>
                    </header>
                    <hr />
                    <h3>Get started by filling out your information below here</h3>
                </div>

                <div>
                    <form className="myform" action="#" method="POST" name="my_form">
                        <fieldset>
                            <legend>General Information</legend>
                                <div className="row">
                                <div className="col">
                                    <label for="Full Name">Full Name:</label>
                                    <input type="text" name="Full Name" id="Full Name" placeholder="John" required />
                                </div>

                              </div>
                                <div className="row">
                                <div className="col">
                                    <label for="Email Address">Email Address:</label>
                                    <input type="text" name="Email" id="Email" placeholder="John345@gmail.com" required />
                                </div>
                                </div>
                        </fieldset>

                        <fieldset>
                            <div className="row">
                                <div className="col">
                                    <label for="essay">For any questions or comments <br />add your message down below here:</label><br />

                                    <textarea name="essay" id="essay" rows="20" cols="50" placeholder="Comment here"></textarea>
                                </div>
                            </div>
                        </fieldset>
                        <input type="submit" value="submit" />
                    </form>
    


    
                </div>

            </body>
        </div>
    )
}

export default Contacts;