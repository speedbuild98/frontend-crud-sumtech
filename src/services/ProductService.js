import axios from "axios";

const PRODUCT_BASE_REST_API_URL =
  "https://crud-sumtechlabs-challenge.herokuapp.com/api/v1/products";

class ProductService {
  getAllProducts() {
    return axios.get(PRODUCT_BASE_REST_API_URL);
  }

  createProduct(product) {
    return axios.post(PRODUCT_BASE_REST_API_URL, product);
  }

  getProductById(productId) {
    return axios.get(PRODUCT_BASE_REST_API_URL + "/" + productId);
  }

  updateProduct(productId, product) {
    return axios.put(PRODUCT_BASE_REST_API_URL + "/" + productId, product);
  }

  deleteProduct(productId) {
    return axios.delete(PRODUCT_BASE_REST_API_URL + "/" + productId);
  }
}

export default new ProductService();
