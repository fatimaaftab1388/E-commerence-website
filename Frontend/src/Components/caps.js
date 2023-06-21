import '../asets/caps.css';
import Header from './header';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import { AppContext } from './abayacontext';
function Caps(){
    const{abaya,setAbaya}=useContext(AppContext);
    const product = abaya.filter(pr=>pr.cat==="cap");

const addToCart=(item)=>{
    const updated = abaya.map(itm=> itm.id=== item.id
        ? {...itm , selected:true}:itm 
        )
        setAbaya(updated);
        console.log(updated);
}
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
                {product.map((caps) => (
            <div className="abaya-card" key={caps.id}>
                <Link to="/details" state={{from:caps}}><img src={caps.image} alt={caps.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{caps.name}</p>
                <h6>Rs. {caps.price} PKR</h6>
                    <button className='b1' onClick={e=>addToCart(caps)}>
                        <img src='../images/shopping-bag.png' alt='l' style={{width:'21px',height:'21px',marginRight:'3%',marginBottom:'1%'}}/>ADD TO CART</button>
                     </div>
                     </div>
                 ))}

            </div>
        </div>
        <Footer />
        </div>
    )
}export default Caps;