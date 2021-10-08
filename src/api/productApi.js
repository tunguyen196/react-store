import axiosClient from "./axiosClient";


const productApi = {
  getAll(params) {
    const url = "/products";
    
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/products/${id}`;

    return axiosClient.get(url, id);
  },

  store(data) {
    const url = "/products";

    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products/${data.id}`;

    return axiosClient.put(url, data);
  },

  destroy(id) {
    const url = `/products/${id}`;

    return axiosClient.delete(url);
  },
};

export default productApi;
