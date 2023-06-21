import '../asets/caps.css';
import Header from './header';
import { useState,useContext ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import { AppContext } from './abayacontext';
import { getProduct } from '../Service/api';

function Caps(){
    const [cap, setCap] = useState([]);

  useEffect(() => {
    getProducts();
    console.log(cap);
  }, []);

    
  const getProducts = async () => {
    const products = await getProduct();
    setCap(products.data);
  };

  const addToCart = (item) => {
    const updated = cap.map((itm) =>
      itm._id === item._id ? { ...itm, selected: true } : itm
    );
    console.log("item is : ", cap[0]._id);
    setCap(updated);
    console.log(updated);
  };
  const filteredCap = cap.filter((item) => item.category === "cap");

    return(
        <div>
            <Header />
            <div>
                <img src='../images/caps.png' alt='log' className="c-img"/>
            </div>
            <div className="abaya-heading"> 
                <h2>OTHER ACCESSORIES</h2>
            </div>
            <div>
        <div className="abaya-container">
          {filteredCap.map((item) => (
            <div className="abaya-card" key={item._id}>
              <Link to="/details" state={{ from: item }}>
                <img
                  src={`https://halalwardrobe-server.onrender.com/uploads/${item.image}`}
                  alt={item.name}
                  className="abaya-img"
                />
              </Link>
              <div id="sm-cart">
                <p style={{ marginTop: '1%', marginBottom: "1%" }}>{item.name}</p>
                <h6>Rs. {item.price} PKR</h6>
                <button className='b1' onClick={() => addToCart(item)}>
                  <img
                    src='../images/shopping-bag.png'
                    alt='l'
                    style={{ width: '21px', height: '21px', marginRight: '3%', marginBottom: '1%' }}
                  />
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    )
}export default Caps;