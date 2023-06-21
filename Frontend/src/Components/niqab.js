import Header from "./header";
import '../asets/abaya.css';
import { Link } from "react-router-dom";
import Footer from "./footer";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./abayacontext";
import { getProduct } from "../Service/api";

function Niqab() {
  const [niqab, setNiqab] = useState([]);

  useEffect(() => {
    getProducts();
    console.log(niqab);
  }, []);

  const getProducts = async () => {
    const products = await getProduct();
    setNiqab(products.data);
  };

  const addToCart = (item) => {
    const updated = niqab.map((itm) =>
      itm._id === item._id ? { ...itm, selected: true } : itm
    );
    console.log("item is : ", niqab[0]._id);
    setNiqab(updated);
    console.log(updated);
  };

  const filteredNiqab = niqab.filter((item) => item.category === "niqab");

  return (
    <div>
      <Header />
      <div>
        <img src="../images/niqabback.png" alt="log" className="ababack" />
      </div>
      <div className="abaya-heading">
        <h2>NIQABS</h2>
      </div>
      <div>
        <div className="abaya-container">
          {filteredNiqab.map((item) => (
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
  );
}

export default Niqab;
