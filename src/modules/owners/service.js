import axios from "axios";

// const url = 'https://my-json-server.typicode.com/Rathnamala06/mock-data';
const url = 'http://localhost:4000';

export const getOwners = () => {
  return axios.get(`${url}/owners`);
}

export const addOwner = (owner) => {
  console.log('owner', owner)
  return axios.post(`${url}/owners`, owner);
}

export const deleteOwner = (id) => {
  return axios.delete(`${url}/owners/${id}`);
}

export const getProducts = () => {
  return axios.get('https://dummyjson.com/products');
}

export const deleteProduct = (id) => {
  console.log('id', id)
  return axios.delete(`https://dummyjson.com/products/${id}`);
}
