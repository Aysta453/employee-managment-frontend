import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const getAllEmployee = () => API.get("/employees");
export const seedEmployee = () => API.post("/employees/seed");
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);
export const createEmployee = (formData) => API.post(`/employees`, formData);
export const updateEmployee = (formData) =>
  API.put(`/employees/${formData.id}`, formData);
export const searchEmployee = (searchGet) =>
  API.get(`/employees?sort=firstName&order=DESC${searchGet}`);
