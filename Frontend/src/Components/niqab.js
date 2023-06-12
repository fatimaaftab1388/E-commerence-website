import Header from "./header";
import '../asets/abaya.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Niqab(){
     const[niqab,setAbaya]=useState([
      {name:'Chiffon Bubble Purple', price:700.00,image:'../images/n1.webp'},
        {name:'Chiffon Bubble Blue', price:700.00,image:'../images/n2.webp'},
        {name:'Chiffon Bubble Green', price:700.00,image:'../images/n3.webp'},
        {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/n4.webp'},
        {name:'Chiffon Bubble Skin', price:700.00,image:'../images/n5.webp'},
        {name:'Chiffon Bubble Yellow', price:700.00,image:'../images/n6.webp'},
        {name:'Chiffon Bubble Gray', price:700.00,image:'../images/n7.webp'},
        {name:'Chiffon Bubble Purple', price:700.00,image:'../images/n8.webp'},
        {name:'Chiffon Bubble Blue', price:700.00,image:'../images/n9.webp'},
        {name:'Chiffon Bubble Green', price:700.00,image:'../images/n10.webp'},
        {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/n11.webp'},
        {name:'Chiffon Bubble Skin', price:700.00,image:'../images/n12.webp'},
        {name:'Chiffon Bubble Yellow', price:700.00,image:'../images/n13.webp'},
        {name:'Chiffon Bubble Gray', price:700.00,image:'../images/n14.webp'},
     ]
    );
  
    return(
        <div>
            <Header />
            <div >
                <img src='../images/niqabback.png' alt='log' className="ababack"/>
            </div>
            <div className="abaya-heading"> 
                <h2>NIQABS</h2>
            </div>
            <div>
                <div className="abaya-container">
                {niqab.map((niqab) => (
            <div className="abaya-card" key={niqab.id}>
                <Link to="/details" state={{from:niqab}}><img src={niqab.image} alt={niqab.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{niqab.name}</p>
                <h6>Rs. {niqab.price} PKR</h6>
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
export default Niqab;