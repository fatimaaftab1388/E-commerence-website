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
      <h2 className="text-xl text-[#8a4af3] font-bold mb-4">All Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products&&products.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">
                  <button
                    className="btn btn-red"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
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