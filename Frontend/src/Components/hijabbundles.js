import Header from "./header";
import '../asets/abaya.css';
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { AppContext } from "./abayacontext";

function Bundles(){
    const{abaya,setAbaya}=useContext(AppContext);
        const product = abaya.filter(pr=>pr.cat==="bundles");

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
            <div >
                <img src='../images/bundles.png' alt='log' className="ababack"/>
            </div>
            <div className="abaya-heading"> 
                <h2>HIJAB BOXES</h2>
            </div>
            <div>
                <div className="abaya-container">
                {product.map((bundles) => (
            <div className="abaya-card" key={bundles.id}>
                <Link to="/details" state={{from:bundles}}><img src={bundles.image} alt={bundles.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{bundles.name}</p>
                <h6>Rs. {bundles.price} PKR</h6>
                    <button className='b1' onClick={e=>addToCart(bundles)}>
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
export default Bundles;