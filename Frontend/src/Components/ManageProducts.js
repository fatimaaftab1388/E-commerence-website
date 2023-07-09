import React, { useState, useEffect } from "react";
import {getProduct,deleteProduct} from '../Service/api'
import Nav from "./adminnav";
const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const productsData = await getProduct();
    setProducts(productsData.data);
  };

  const handleDelete = async (productId) => {
     await deleteProduct(productId);
     fetchList();
  };

  return (
    <div className="max-w-screen mx-auto mt-[80px] px-8 py-6">
        <Nav/>
      <h2 className="text-xl text-[#8a4af3] font-bold mb-4" style={{textAlign:'center',marginTop:"2%"}}>Delete Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="table-auto w-full" style={{width:'100%'}}>
          <thead>
            <tr>
              <th className="px-4 py-2">Products</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products&&products.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2"><img src={product.img} alt={product.name}></img></td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2"style={{width:'15%'}}>
                  <button
                    className="btn btn-red" style={{backgroundColor:"pink"}}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-red" style={{backgroundColor:'cyan',marginLeft:'10%'}}
                    onClick={() => handleDelete(product._id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProducts;