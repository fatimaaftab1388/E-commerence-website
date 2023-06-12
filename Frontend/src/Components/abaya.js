import Header from "./header";
import '../asets/abaya.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

function Abaya(){
     const[abaya,setAbaya]=useState([
        { id: 1, name: 'ARYA ABAYA', price: 5050, image: '../images/a1.png',material:'leather' },
        { id: 2, name: 'MAKO ABAYA', price: 7500, image: '../images/a2.png' ,material:'silk'},
        { id: 3, name: 'MAHI ABAYA', price: 8000, image: '../images/a3.png' ,material:'deffy'},
        { id: 4, name: 'TURKISH ABAYA', price: 3050, image: '../images/a4.png' ,material:'chiffon'},
        { id: 5, name: 'NASHEE ABAYA', price: 6330, image: '../images/a5.png' ,material:'silk'},
        { id: 6, name: 'HOOK ABAYA', price: 8535, image: '../images/ha5.webp' ,material:'leather'},
        { id: 7, name: 'WASHEE ABAYA', price: 5050, image: '../images/ha2.webp',material:'leather' },
        { id: 8, name: 'NOSH ABAYA', price: 7500, image: '../images/ha3.webp' ,material:'silk'},
        { id: 9, name: 'ALISH ABAYA', price: 9000, image: '../images/ha4.webp' ,material:'deffy'},
        { id: 10, name: 'TAKE ABAYA', price: 5050, image: '../images/ha8.webp' ,material:'chiffon'},
        { id: 11, name: 'NOOR ABAYA', price: 4330, image: '../images/ha6.webp' ,material:'silk'},
        { id: 12, name: 'HAYA ABAYA', price: 8535, image: '../images/ha7.webp' ,material:'leather'},
      ]
    );
    const navigate = useNavigate();
    const[cartItems,setCartItems]=useState([]);
    const addToCart=(e)=>{
       navigate('/Components/cartdetail',setCartItems([...cartItems,e])) 
    }
    const handleDetails = (abaya) => {
        navigate('/cartdetail', { state: { from: abaya } });
      };
    return(
        <div>
            <Header />
            <div >
                <img src='../images/abayaback.png' alt='log' className="ababack"/>
            </div>
            <div className="abaya-heading"> 
                <h2>ABAYAS</h2>
            </div>
            <div>
                <div className="abaya-container">
                {abaya.map((abaya) => (
            <div className="abaya-card" key={abaya.id}>
                <Link to="/details" state={{from:abaya}}><img src={abaya.image} alt={abaya.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{abaya.name}</p>
                <h6>Rs. {abaya.price} PKR</h6>
                    <button className='b1' onClick={e=> addToCart(abaya)} >
                        <img src='../images/shopping-bag.png' alt='l' style={{width:'21px',height:'21px',marginRight:'3%',marginBottom:'1%'}}/>ADD TO CART</button>
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