import React from 'react'
import Nav from './adminnav';
import '../asets/admindashboard.css';
import { useState } from 'react';
import { addProduct } from '../Service/api';

function AddProduct() {
    const [product, setProduct] = useState({
        name: "",
        selected: false,
        category: "",
        price: 0,

    });
    const saveDetails= async (e) => {
        e.preventDefault();
        console.log("after saving : ",product);
        
        await addProduct(product)

    };
    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
        }
  return (
    <div>
        <div>
            <Nav />
        </div>
        <div className='add-product'>
            <h3>Add New Product</h3>
            <div class="row" style={{marginTop:'2%'}}>
                <div class="col">
                <input type="text" class="form-control" placeholder="Product Name" aria-label="First name" name='name' onChange={handleChange}/>
                </div>
            </div> 
            <div className='row' style={{marginTop:'2%' }}> 
            <   div class="col">
                <input type="text" class="form-control" placeholder="Product Price " aria-label="Last name" name='price' onChange={handleChange}/>
                </div>
            </div>
            <div class="row" style={{marginTop:'2%'}}>
                <div class="col">
                <input type="text" class="form-control" placeholder="Categorie" aria-label="First name" name='category' onChange={handleChange}/>
                </div>
            </div>
            <div className='row'>
                <button style={{marginTop:'2%',width:'40%',marginLeft:'30%',background:'pink',borderRadius:'10px'}} onClick={saveDetails}>Save</button>
            </div>
        </div>
    </div>
    
  )
}

export default AddProduct;