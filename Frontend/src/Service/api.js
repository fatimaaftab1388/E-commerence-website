import axios from "axios";

const url= "http://localhost:5000";

export const addProduct= async(data)=>{
    return await axios.post(`${url}/product`,data)
}

export const getProduct=async()=>{
    return await axios.get(`${url}/product`);
}

export const updateProduct=async(id,updatedProduct)=>{
    return await axios.put(`${url}/product/${id}`,updatedProduct);
}
export const deleteProduct=async(id)=>{
    return await axios.delete(`${url}/product/`+id);
}

export const addUser=async(user)=>{
    return await axios.post(`${url}/user`,user);
}

export const getUser=async(token)=>{
    return await axios.get(`${url}/user`,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
}


export const login=async(payload)=>{
    return await axios.post(`${url}/user/login`,payload);
}