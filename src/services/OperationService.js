import axios from "axios";

const OPERATION_BASE_REST_API_URL =
  "https://crud-sumtechlabs-challenge.herokuapp.com/api/v1/operations";

class OperationService {
  getAllOperations() {
    return axios.get(OPERATION_BASE_REST_API_URL);
  }

  createOperation(operation) {
    return axios.post(OPERATION_BASE_REST_API_URL, operation);
  }

  getOperationById(operationId) {
    return axios.get(OPERATION_BASE_REST_API_URL + "/" + operationId);
  }

  updateOperation(operationId, operation) {
    return axios.put(
      OPERATION_BASE_REST_API_URL + "/" + operationId,
      operation
    );
  }

  deleteOperation(operationId) {
    return axios.delete(OPERATION_BASE_REST_API_URL + "/" + operationId);
  }
}

export default new OperationService();
