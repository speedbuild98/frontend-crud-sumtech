import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import OperationService from "../../services/OperationService";
import CustomerService from "../../services/CustomerService";
import ProductService from "../../services/ProductService";

const AddOperation = () => {
  const [customers, setCustomers] = useState([]);
  const [product, setProductos] = useState([]);

  useEffect(() => {
    getAllCustomers();
    getAllProducts();
  }, []);

  const getAllCustomers = () => {
    CustomerService.getAllCustomers()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        setProductos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [date, setDate] = useState("");
  const [firstNameCustomer, setFirstNameOperation] = useState("");
  const [lastNameCustomer, setLastNameOperation] = useState("");
  const [products, setProducts] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateOperation = (e) => {
    e.preventDefault();

    const operation = {
      date,
      firstNameCustomer,
      lastNameCustomer,
      price,
      products,
      quantity,
      total,
    };

    if (id) {
      OperationService.updateOperation(id, operation)
        .then((response) => {
          history.push("/operations");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      OperationService.createOperation(operation)
        .then((response) => {
          console.log(response.data);

          history.push("/operations");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    OperationService.getOperationById(id)
      .then((response) => {
        setDate(response.data.date);
        setFirstNameOperation(response.data.firstNameCustomer);
        setLastNameOperation(response.data.lastNameCustomer);
        setProductos(response.data.product);
        setQuantity(response.data.quantity);
        setTotal(response.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Operation</h2>;
    } else {
      return <h2 className="text-center">Add Operation</h2>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Date:</label>
                  <input
                    autoFocus
                    required
                    type="date"
                    placeholder="Enter date"
                    name="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Customer name:</label>
                  <select
                    required
                    className="form-control"
                    name="first name customer"
                    onChange={(e) => setFirstNameOperation(e.target.value)}
                    value={firstNameCustomer}
                    placeholder="Hola"
                  >
                    <option defaultValue>Select customer name</option>
                    {customers.map((customer) => (
                      <option>{customer.firstName}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Customer last name:</label>
                  <select
                    required
                    name="last name"
                    className="form-control"
                    onChange={(e) => setLastNameOperation(e.target.value)}
                    value={lastNameCustomer}
                  >
                    <option defaultValue>Select customer last name</option>
                    {customers.map((customer) => (
                      <option>{customer.lastname}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Product:</label>
                  <select
                    required
                    name="product name"
                    className="form-control"
                    onChange={(e) => setProducts(e.target.value)}
                    value={products}
                  >
                    <option defaultValue>Select product</option>
                    {product.map((product) => (
                      <option>{product.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Price:</label>
                  <select
                    required
                    name="price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  >
                    <option defaultValue>Select price</option>
                    {product.map((product) => (
                      <option>{product.price}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Quantity:</label>
                  <input
                    required
                    id="totalOperation"
                    type="number"
                    placeholder="Enter quantity"
                    name="quantity"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Total:</label>
                  <input
                    required
                    type="number"
                    placeholder="Enter total"
                    name="total"
                    className="form-control"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                  ></input>
                </div>

                <button
                  style={{ margin: "10px" }}
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateOperation(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/operations" className="btn btn-danger text-white">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOperation;
