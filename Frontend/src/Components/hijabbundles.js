import Header from "./header";
import '../asets/abaya.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Bundles(){
     const[bundles,setAbaya]=useState([
      {name:'Chiffon Bubble Purple', price:700.00,image:'../images/bundle1.jpg'},
        {name:'Chiffon Bubble Blue', price:700.00,image:'../images/bundle2.jpg'},
        {name:'Chiffon Bubble Green', price:700.00,image:'../images/bundle3.jpg'},
        {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/bundle4.jpg'},
        {name:'Chiffon Bubble Skin', price:700.00,image:'../images/bundle1.jpg'},
        {name:'Chiffon Bubble Purple', price:700.00,image:'../images/bundle1.jpg'},
        {name:'Chiffon Bubble Blue', price:700.00,image:'../images/bundle2.jpg'},
        {name:'Chiffon Bubble Green', price:700.00,image:'../images/bundle3.jpg'},
        {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/bundle4.jpg'},
        {name:'Chiffon Bubble Skin', price:700.00,image:'../images/bundle1.jpg'},
        
     ]
    );
  
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
                {bundles.map((bundles) => (
            <div className="abaya-card" key={bundles.id}>
                <Link to="/details" state={{from:bundles}}><img src={bundles.image} alt={bundles.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{bundles.name}</p>
                <h6>Rs. {bundles.price} PKR</h6>
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
export default Bundles;