

// connecting react pages to api server

//  const getProducts = () => 
//   new Promise((resolve, reject) => {
//     return fetch('http://localhost:3001/api/products').then(response => {
//       if (response.ok) {
//         resolve(response.json())
//       } else {
//         reject(new Error('error'))
//       }
//     }, error => {
//       reject(new Error(error.message))
//     })
//   })

  const getProducts =() =>
    fetch('http://localhost:3001/api/products')

//  componentDidMount() {
//      const data = getProducts();
//      this.setState({products: data})
//  }


 export {getProducts}