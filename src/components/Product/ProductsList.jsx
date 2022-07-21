import React, { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";
import Plus from "@iconscout/react-unicons/icons/uil-plus-circle";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (productId) => {
    ProductService.deleteProduct(productId)
      .then((response) => {
        getAllProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-center"> List Products </h2>
      <Link to="/add-product" className="btn btn-primary mb-2">
        {" "}
        <Plus />
        Add Product{" "}
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Code </th>
            <th> Price </th>
            <th> Stock </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td> {product.id} </td>
              <td> {product.name} </td>
              <td> #{product.code} </td>
              <td> ${product.price} </td>
              <td> {product.stock} </td>
              <td>
                <Link
                  className="btn btn-info text-white"
                  to={`/edit-product/${product.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product.id)}
                  style={{ margin: "10px" }}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
