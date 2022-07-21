//Components
import CustomersList from "./components/Customer/CustomersList"
import AddCustomer from "./components/Customer/AddCustomer"
import ProductsList from "./components/Product/ProductsList"
import AddProduct from "./components/Product/AddProduct"
import OperationsList from "./components/Operation/OperationsList"
import AddOperation from "./components/Operation/AddOperation"
import Header from './components/Header'
import Dashboard from "./components/Dashboard"

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {Dashboard}></Route>

              <Route path = "/customers" component = {CustomersList}></Route>
              <Route path = "/add-customer" component = {AddCustomer} ></Route>
              <Route path = "/edit-customer/:id" component = {AddCustomer}></Route>

              <Route path = "/products" component = {ProductsList}></Route>
              <Route path = "/add-product" component = {AddProduct} ></Route>
              <Route path = "/edit-product/:id" component = {AddProduct}></Route>

              <Route path = "/operations" component = {OperationsList}></Route>
              <Route path = "/add-operation" component = {AddOperation} ></Route>
              <Route path = "/edit-operation/:id" component = {AddOperation}></Route>
            </Switch>
        </div>
        </Router>
    </div>
  );
}

export default App;
