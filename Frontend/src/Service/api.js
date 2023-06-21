import axios from "axios";

const url= "http://localhost:5000";

export const addProduct= async(data)=>{
    return await axios.post(`${url}/product`,data)
}

export const getProduct=async()=>{
    return await axios.get(`${url}/product`);
}

export const addUser=async(user)=>{
    return await axios.post(`${url}/user`,user);
}

axios.get();
axios.post();
