import '../asets/caps.css';
import Header from './header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
function Caps(){
    const[caps,setAbaya]=useState([
        {name:'Chiffon Bubble Purple', price:700.00,image:'../images/so1.webp'},
          {name:'Chiffon Bubble Blue', price:700.00,image:'../images/so2.webp'},
          {name:'Chiffon Bubble Green', price:700.00,image:'../images/so3.webp'},
          {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/so4.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/so5.webp'},
          {name:'Chiffon Bubble Purple', price:700.00,image:'../images/so6.webp'},
          {name:'Chiffon Bubble Blue', price:700.00,image:'../images/so7.webp'},
          {name:'Chiffon Bubble Green', price:700.00,image:'../images/so8.webp'},
          {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/so9.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/s04.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/so10.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/so11.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap1.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap2.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap3.webp'},
          {name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap4.webp'},
          
       ]
      );
    
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
                {caps.map((caps) => (
            <div className="abaya-card" key={caps.id}>
                <Link to="/details" state={{from:caps}}><img src={caps.image} alt={caps.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{caps.name}</p>
                <h6>Rs. {caps.price} PKR</h6>
                    <button className='b1' >
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