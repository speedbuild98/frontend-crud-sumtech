import React, { useEffect, useState } from "react";
import OperationService from "../../services/OperationService";
import { Link } from "react-router-dom";
import Plus from "@iconscout/react-unicons/icons/uil-plus-circle";

const OperationsList = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    getAllOperations();
  }, []);

  const getAllOperations = () => {
    OperationService.getAllOperations()
      .then((response) => {
        setOperations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteOperation = (operationId) => {
    OperationService.deleteOperation(operationId)
      .then((response) => {
        getAllOperations();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-center"> List Operations </h2>
      <Link to="/add-operation" className="btn btn-primary mb-2">
        {" "}
        <Plus /> Add Operation{" "}
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th> ID </th>
            <th> Date </th>
            <th> Customer First Name </th>
            <th> Customer Last Name </th>
            <th> Product </th>
            <th> Quantity </th>
            <th> Total </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {operations.map((operation) => (
            <tr key={operation.id}>
              <td> {operation.id} </td>
              <td> {operation.date} </td>
              <td> {operation.firstNameCustomer} </td>
              <td> {operation.lastNameCustomer} </td>
              <td> {operation.products} </td>
              <td> {operation.quantity} </td>
              <td> ${operation.total} </td>
              <td>
                <Link
                  className="btn btn-info text-white"
                  to={`/edit-operation/${operation.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteOperation(operation.id)}
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

export default OperationsList;
