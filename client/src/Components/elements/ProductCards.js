import React from 'react';

/* created a  Product functional component and it passes in properties to
each part of my product cards(the product image,the name of product, and the price of product)
*/

function ProductCards(props) {
    const {proddata}=props
    return (
        <div>
        {proddata.map(product => {
            return (
            <div className=" col-md-3 col-sm-6  under10" key={product.Product_id}>
            <div className="card">
                <div className="work-img">
                    <a href="#"><img src={product.Img_url} className="card-img-top img-fluid" alt="Pen1"/></a>
                    <div className="img-overlay"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.Product_title}</h5>
                    <p className="card-text">{product.Product_Description}</p>
                    <p className="card-text">{product.Product_categories } </p>
                </div>
            </div>
        </div>


        )})}
      </div>  
    )
}

export default ProductCards;