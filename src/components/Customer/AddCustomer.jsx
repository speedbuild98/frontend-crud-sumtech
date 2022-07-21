import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import CustomerService from '../../services/CustomerService'

const AddCustomer = () => {

      const [firstName, setFirstName] = useState('')
      const [lastname, setLastName] = useState('')
      const [email, setEmail] = useState('')
      const history = useHistory();
      const {id} = useParams();
  
      const saveOrUpdateCustomer = (e) => {
          e.preventDefault();
  
          const customer = {firstName, lastname, email}
  
          if(id){
              CustomerService.updateCustomer(id, customer).then((response) => {
                  history.push('/customers')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
              CustomerService.createCustomer(customer).then((response) =>{
  
                  console.log(response.data)
      
                  history.push('/customers');
      
              }).catch(error => {
                  console.log(error)
              })
          }
          
      }
  
      useEffect(() => {
  
          CustomerService.getCustomerById(id).then((response) =>{
              setFirstName(response.data.firstName)
              setLastName(response.data.lastname)
              setEmail(response.data.email)
          }).catch(error => {
              console.log(error)
          })
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  
      const title = () => {
  
          if(id){
              return <h2 className = "text-center">Update Customer</h2>
          }else{
              return <h2 className = "text-center">Add Customer</h2>
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
                                      <label className = "form-label"> First Name :</label>
                                      <input
                                          type = "text"
                                          placeholder = "Enter first name"
                                          name = "firstName"
                                          className = "form-control"
                                          value = {firstName}
                                          onChange = {(e) => setFirstName(e.target.value)}
                                      >
                                      </input>
                                  </div>
  
                                  <div className = "form-group mb-2">
                                      <label className = "form-label"> Last Name :</label>
                                      <input
                                          type = "text"
                                          placeholder = "Enter last name"
                                          name = "lastName"
                                          className = "form-control"
                                          value = {lastname}
                                          onChange = {(e) => setLastName(e.target.value)}
                                      >
                                      </input>
                                  </div>
  
                                  <div className = "form-group mb-2">
                                      <label className = "form-label"> Email Id :</label>
                                      <input
                                          type = "email"
                                          placeholder = "Enter email Id"
                                          name = "emailId"
                                          className = "form-control"
                                          value = {email}
                                          onChange = {(e) => setEmail(e.target.value)}
                                      >
                                      </input>
                                  </div>
  
                                  <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCustomer(e)} >Submit </button>
                                  <Link to="/customers" className="btn btn-danger"> Cancel </Link>
                              </form>
  
                          </div>
                      </div>
                  </div>
  
             </div>
  
          </div>
      )
  }
  
  export default AddCustomer