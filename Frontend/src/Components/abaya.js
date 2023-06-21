import Header from "./header";
import '../asets/abaya.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { getProduct } from "../Service/api";

function Abaya() {

  const [abaya,setAbaya]  = useState([]);

  useEffect(() => {
    getProducts();
    console.log(abaya);
  },[]);

  const getProducts = async () => {
    const products = await getProduct();
    setAbaya(products.data);
    
  };


  
  const addToCart = (item) => {
   
    const updated = abaya.map((itm) =>
      itm._id === item._id ? { ...itm, selected: true } : itm


    );
    console.log("item is : ", abaya[0]._id)
    setAbaya(updated);
    console.log(updated);
  };

  const filteredAbaya =  abaya.filter((item) => item.category === "abaya");

  return (
    <div>
      <Header />
     
      <div>
        <img src="../images/abayaback.png" alt="log" className="ababack" />
      </div>
      <div className="abaya-heading">
        <h2>ABAYAS</h2>
      </div>
      <div>
        <div className="abaya-container">
          {filteredAbaya.map((item) => (
            <div className="abaya-card" >
              <Link to="/details" state={{ from: item }}>
              <img src={`https://halalwardrobe-server.onrender.com/uploads/${item.image}`} alt={item.name} className="abaya-img" />
             </Link>
              <div id="sm-cart">
                <p style={{ marginTop: '1%', marginBottom: "1%" }}>{item.name}</p>
                <h6>Rs. {item.price} PKR</h6>
                <button className='b1' onClick={e => addToCart(item)}>
                  <img src='../images/shopping-bag.png' alt='l' style={{ width: '21px', height: '21px', marginRight: '3%', marginBottom: '1%' }} />ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Abaya;
