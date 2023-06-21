import Header from "./header";
import '../asets/abaya.css';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./abayacontext";
import { getProduct } from "../Service/api";

function Abaya(){
    //  const{abaya,setAbaya}=useContext(AppContext);

     const [abaya,setAbaya] = useState([]);
     
  useEffect(()=>{
    getProducts();
  })

  const getProducts=async()=>{
    const pr = await getProduct();
    setAbaya(pr);
  }

        const product = abaya.filter(pr=>pr.cat==="abaya");

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
                <img src='../images/abayaback.png' alt='log' className="ababack"/>
            </div>
            <div className="abaya-heading"> 
                <h2>ABAYAS</h2>
            </div>
            <div>
                <div className="abaya-container">
                {product.map((item) => (
            <div className="abaya-card" key={item.id}>
                <Link to="/details" state={{from:item}}><img src={item.image} alt={item.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{item.name}</p>
                <h6>Rs. {item.price} PKR</h6>
                    <button className='b1' onClick={e=> addToCart(item)} >
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