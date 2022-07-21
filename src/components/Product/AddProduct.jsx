import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import ProductService from '../../services/ProductService'

const AddCustumer = () => {

      const [name, setName] = useState('')
      const [code, setCode] = useState('')
      const [price, setPrice] = useState('')
      const [stock, setStock] = useState('')
      const history = useHistory();
      const {id} = useParams();
  
      const saveOrUpdateProduct = (e) => {
          e.preventDefault();
  
          const product = {name, code, price, stock}
  
          if(id){
              ProductService.updateProduct(id, product).then((response) => {
                  history.push('/products')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
              ProductService.createProduct(product).then((response) =>{
  
                  console.log(response.data)
      
                  history.push('/products');
      
              }).catch(error => {
                  console.log(error)
              })
          }
          
      }
  
      useEffect(() => {
  
          ProductService.getProductById(id).then((response) =>{
              setName(response.data.name)
              setCode(response.data.code)
              setPrice(response.data.price)
              setStock(response.data.stock)
          }).catch(error => {
              console.log(error)
          })
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  
      const title = () => {
  
          if(id){
              return <h2 className = "text-center">Update Product</h2>
          }else{
              return <h2 className = "text-center">Add Product</h2>
          }
      }
  
      return (
          <div>
             <div className = "container">
                  <div className = "row">
                      <div className = "card col-md-6 offset-md-3 offset-md-3">
                         {
                             title()
                         }
                          <div className = "card-body">
                              <form>
                                  <div className = "form-group mb-2">
                                      <label className = "form-label"> Name:</label>
                                      <input
                                          type = "text"
                                          placeholder = "Enter product name"
                                          name = "name"
                                          className = "form-control"
                                          value = {name}
                                          onChange = {(e) => setName(e.target.value)}
                                      >
                                      </input>
                                  </div>
  
                                  <div className = "form-group mb-2">
                                      <label className = "form-label"> Code:</label>
                                      <input
                                          type = "number"
                                          placeholder = "Enter corde"
                                          name = "code"
                                          className = "form-control"
                                          value = {code}
                                          onChange = {(e) => setCode(e.target.value)}
                                      >
                                      </input>
                                  </div>
  
                                  <div className = "form-group mb-2">
                                      <label className = "form-label"> Price:</label>
                                      <input
                                          type = "number"
                                          placeholder = "Enter price"
                                          name = "price"
                                          className = "form-control"
                                          value = {price}
                                          onChange = {(e) => setPrice(e.target.value)}
                                      >
                                      </input>
                                  </div>

                                  <div className = "form-group mb-2">
                                      <label className = "form-label"> Stock:</label>
                                      <input
                                          type = "number"
                                          placeholder = "Enter stock"
                                          name = "stock"
                                          className = "form-control"
                                          value = {stock}
                                          onChange = {(e) => setStock(e.target.value)}
                                      >
                                      </input>
                                  </div>
  
                                  <button className = "btn btn-success" onClick = {(e) => saveOrUpdateProduct(e)} >Submit </button>
                                  <Link to="/products" className="btn btn-danger"> Cancel </Link>
                              </form>
  
                          </div>
                      </div>
                  </div>
  
             </div>
  
          </div>
      )
  }
  
  export default AddCustumer