import React from 'react';
import NavBar from '../elements/Navbar'
import Footer from '../elements/Footer'
import ProductCards from '../elements/ProductCards'
import {getProducts} from '../../Routes/apiroutes'

class Products extends React.Component {
    state={
        data:[]
    }
    componentDidMount(){

        // getProducts()
        // .then(data => {this.setState({ data })})
        // .catch(e => console.log("error - ", e));

        // working example
        getProducts() // [Promise]
        .then (response => { return response.json()})
        .then(data => {this.setState({data})})

        // fetch('http://localhost:3001/api/products')
        // .then (response => { return response.json()})
        // .then(data => {this.setState({data})})
        // .catch(e => console.log("error - ", e));
    }
    render(){
        console.log('this- ', this.state);
    return (
        <div>
            <body>
                <div id="products-page"></div>
                <div>
                    <section id="work">
                        <div className="penproducts">
                            <div className="row">
                                <div className="col-md-12 page-header">
                                    <h2>Our Products</h2>
                                    <p>Choose from our Pen collection</p>
                                </div>
                            </div>
                            <div className="row">
                                <input type="radio" id="blue" name="color" />
                                <label className="filter-label" htmlfor="blue">Business Pens</label>
                                <input type="radio" id="red" name="color" />
                                <label className="filter-label" htmlfor="red">Fun/Art Pens</label>
                                <input type="radio" id="green" name="color" />
                                <label className="filter-label" htmlfor="green">Under $10</label>
                                <input type="radio" id="reset" name="color" />
                                <label className="filter-label" htmlfor="reset">All</label>
                                <div className="row">
                                    {<ProductCards proddata={this.state.data} />}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </body>    
        </div>
    )}
}

export default Products;