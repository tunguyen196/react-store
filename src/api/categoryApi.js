import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/categories";

    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/categories/${id}`;

    return axiosClient.get(url, id);
  },

  store(data) {
    const url = "/categories";

    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/categories/${data.id}`;

    return axiosClient.put(url, data);
  },

  destroy(id) {
    const url = `/categories/${id}`;

    return axiosClient.delete(url);
  },
};

export default categoryApi;
