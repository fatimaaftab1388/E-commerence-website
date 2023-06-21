import Header from "./header";
import '../asets/abaya.css';
import { useState, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { AppContext } from "./abayacontext";
import { getProduct } from "../Service/api";

function Bundles() {
    const [bundle,setBundle]  = useState([]);

    useEffect(() => {
      getProducts();
      console.log(bundle);
    },[]);

    const getProducts = async () => {
        const products = await getProduct();
        setBundle(products.data);
        
      };
    
      const addToCart = (item) => {
   
        const updated = bundle.map((itm) =>
          itm._id === item._id ? { ...itm, selected: true } : itm
    
    
        );
        console.log("item is : ", bundle[0]._id)
        setBundle(updated);
        console.log(updated);
      };
      const filteredAbaya =  bundle.filter((item) => item.category === "bundle");

  return (
    <div>
      <Header />
     
      <div>
        <img src="../images/bundles.png" alt="log" className="ababack" />
      </div>
      <div className="abaya-heading">
        <h2>BUNDLE BOXES</h2>
      </div>
      <div>
        <div className="abaya-container">
          {filteredAbaya.map((item) => (
            <div className="abaya-card" >
              <Link to="/details" state={{ from: item }}>
              <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} className="abaya-img" />
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

export default Bundles;
