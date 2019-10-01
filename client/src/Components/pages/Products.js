import React from 'react';
import NavBar from '../elements/Navbar'
import Footer from '../elements/Footer'
import ProductCards from '../elements/ProductCards'
import {getProducts, getProductfilter, getPrices} from '../../Routes/apiroutes'
import Carousel from '../elements/Carousel';


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
        // [Promise]
        
    }


    render(){
        const getFilteredProducts = (category) => {
            getProductfilter(category)
            .then (response => { return response.json()})
            .then(data => {this.setState({data})})
        }

        const getPricess = () => {
            getPrices().then (response => { return response.json()})
            .then(data => {this.setState({data})})
            console.log('this- ', this.state);
        }
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
                                <button className="filter-label" onClick={() => getFilteredProducts('businesspens')}>Business Pens</button>
                                <input type="radio" id="blue" name="color"/>
                                <button className="filter-label" onClick={() => getFilteredProducts('funartpens')}>Fun/Art Pens</button>
                                <input type="radio" id="red" name="color" />
                                <button className="filter-label" onClick={() => getPricess()}>Under $10</button>
                                <input type="radio" id="green" name="color" />
                                <input type="radio" id="reset" name="color" />
                                <label className="filter-label" htmlfor="reset">All</label>
                                
                                {<ProductCards proddata={this.state.data} />}
                                
                            </div>
                        </div>
                    </section>
            
                </div>
            </body>    
        </div>
    )}
}

export default Products;