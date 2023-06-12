import Header from "./header";
import '../asets/abaya.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Hijab(){
     const[abaya,setAbaya]=useState([
      {name:'Chiffon Bubble Purple', price:700.00,image:'../images/hijab1.jpg'},
        {name:'Chiffon Bubble Blue', price:700.00,image:'../images/hijab2.jpg'},
        {name:'Chiffon Bubble Green', price:700.00,image:'../images/hijab3.jpg'},
        {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/hijab4.jpg'},
        {name:'Chiffon Bubble Skin', price:700.00,image:'../images/hijab5.jpg'},
        {name:'Chiffon Bubble Yellow', price:700.00,image:'../images/hijab6.jpg'},
        {name:'Chiffon Bubble Gray', price:700.00,image:'../images/hijab7.jpg'},
        {name:'Chiffon Bubble Purple', price:700.00,image:'../images/hijab7.webp'},
        {name:'Chiffon Bubble Blue', price:700.00,image:'../images/hh2.webp'},
        {name:'Chiffon Bubble Green', price:700.00,image:'../images/hh3.webp'},
        {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/hh4.webp'},
        {name:'Chiffon Bubble Skin', price:700.00,image:'../images/hh5.webp'},
        {name:'Chiffon Bubble Yellow', price:700.00,image:'../images/hh6.webp'},
        {name:'Chiffon Bubble Gray', price:700.00,image:'../images/hh7.webp'},
     ]
    );
  
    return(
        <div>
            <Header />
            <div >
                <img src='../images/hijabback.png' alt='log' className="ababack"/>
            </div>
            <div className="abaya-heading"> 
                <h2>HIJABS</h2>
            </div>
            <div>
                <div className="abaya-container">
                {abaya.map((abaya) => (
            <div className="abaya-card" key={abaya.id}>
                <Link to="/details" state={{from:abaya}}><img src={abaya.image} alt={abaya.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{abaya.name}</p>
                <h6>Rs. {abaya.price} PKR</h6>
                    <button className='b1' >
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
export default Hijab;