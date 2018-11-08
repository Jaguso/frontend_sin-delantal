import axios from 'axios';


const API_URL = "http://localhost:8086/api/v1";

const createUser = (data) => axios.post(`${API_URL}/users/signup/`, data)

const loginUser = (data) => axios.post(`${API_URL}/users/login/`, data)

const createRestaurant = (data) => axios.post(`${API_URL}/restaurants`, data,
{headers: {"Authorization": `JWT ${localStorage.getItem('sindelantalToken')}`}})

const getRestaurants = () => axios.get(`${API_URL}/restaurants`)

const createDish = (data) => axios.post(`${API_URL}/restaurants/dishes`, data,   
{headers: {"Authorization": `JWT ${localStorage.getItem('sindelantalToken')}`}})


export { 
  createUser,
  loginUser,
  createRestaurant,
  getRestaurants,
  createDish
  
}