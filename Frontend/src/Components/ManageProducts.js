import React, { useState, useEffect, useContext } from "react";
import { getProduct, deleteProduct,updateProduct } from '../Service/api';
import Nav from "./adminnav";
import { AppContext } from "./abayacontext";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const {currUser}=useContext(AppContext)
  useEffect(() => {
    console.log(currUser)
    fetchList();
  }, [selectedProduct]);

  const fetchList = async () => {
    const productsData = await getProduct();
    setProducts(productsData.data);
  };

  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    fetchList();
  };

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdateForm(true);
    setUpdatedProduct({
      _id:product._id,
      name: product.name,
      price: product.price,
      // Set other attributes of the product as needed
    });
  };

  const handleSaveClick = async() => {
    // Perform the necessary logic to save the updatedProduct
    console.log(updatedProduct)
    await updateProduct(updatedProduct._id,updatedProduct)
    // Reset the form and close the update form
    setUpdatedProduct({});
    setSelectedProduct(null);
    setShowUpdateForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-screen mx-auto mt-[80px] px-8 py-6">
      <Nav />
      <h2 className="text-xl text-[#8a4af3] font-bold mb-4" style={{ textAlign: 'center', marginTop: "2%" }}>Delete Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="table-auto w-full" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th className="px-4 py-2">Products</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2" style={{ width: '15%' }}>
                  <button
                    className="btn btn-red" style={{ backgroundColor: "pink" }}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-red" style={{ backgroundColor: 'cyan', marginLeft: '10%' }}
                    onClick={() => handleUpdate(product)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showUpdateForm && selectedProduct && (
        <div>
          <h2>Update Product Form</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={updatedProduct.price}
                onChange={handleInputChange}
              />
            </div>
            {/* Add other input fields for additional attributes */}
          </form>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
