import React, { useEffect } from "react";
import Nav from "./adminnav";
import "../asets/admindashboard.css";
import { useState } from "react";
import { addProduct, getProduct } from "../Service/api";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    image: null
  });

  const saveDetails = async (e) => {
    e.preventDefault();
    console.log("after saving : ", product);
    const formData=new FormData()

    formData.append("name",product.name)
    formData.append("category",product.category)
    formData.append("price",product.price)
    formData.append("image",product.image)
    console.log(formData)
    await addProduct(formData)
  };
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage=(e)=>{
    setProduct({...product,[e.target.name]:e.target.files[0]});
  }
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="add-product">
        <h3>Add New Product</h3>
        <div class="row" style={{ marginTop: "2%" }}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Product Name"
              aria-label="First name"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "2%" }}>
          <div class="col">
            <input
              type="number"
              class="form-control"
              placeholder="Product Price "
              aria-label="Last name"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row" style={{ marginTop: "2%" }}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Categorie"
              aria-label="First name"
              name="category"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row" style={{ marginTop: "2%" }}>
          <div class="col">
            <input
              type="file"
              class="form-control"
              aria-label="First name"
              name="image"
              onChange={handleImage}
            />
          </div>
        </div>
        <div className="row">
          <button
            style={{
              marginTop: "2%",
              width: "40%",
              marginLeft: "30%",
              background: "pink",
              borderRadius: "10px",
            }}
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
