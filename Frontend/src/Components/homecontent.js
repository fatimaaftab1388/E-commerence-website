import '../asets/content.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Content(){
    const[abaya]=useState([
    {name:'AYRA ABAYA White', price:5000.00,image:'../images/ha1.webp'},
    {name:'MARYA ABAYA Purpule', price:6000.00,image:'../images/ha2.webp'},
    {name:'MEHK ABAYA Blue', price:3000.00,image:'../images/ha3.webp'},
    {name:'NASHEE ABAYA White', price:5000.00,image:'../images/ha4.webp'},
    {name:'ALISH ABAYA Black', price:9000.00,image:'../images/ha5.webp'},
    {name:'NASHI ABAYA Gray', price:8000.00,image:'../images/ha6.webp'},
    {name:'OKAA ABAYA Black', price:7000.00,image:'../images/ha7.webp'},
    {name:'LORA ABAYA Pink', price:6000.00,image:'../images/ha8.webp'},
    {name:'ROSH ABAYA Purple', price:5000.00,image:'../images/ha9.webp'},
    {name:'POSH ABAYA Pinkish', price:2000.00,image:'../images/ha10.webp'},
    ])
    const[hijab]=useState([
        {name:'Chiffon Bubble Purple', price:700.00,image:'../images/hh1.webp'},
        {name:'Chiffon Bubble Blue', price:700.00,image:'../images/hh2.webp'},
        {name:'Chiffon Bubble Green', price:700.00,image:'../images/hh3.webp'},
        {name:'Chiffon Bubble Frozen', price:700.00,image:'../images/hh4.webp'},
        {name:'Chiffon Bubble Skin', price:700.00,image:'../images/hh5.webp'},
        {name:'Chiffon Bubble Yellow', price:700.00,image:'../images/hh6.webp'},
        {name:'Chiffon Bubble Gray', price:700.00,image:'../images/hh7.webp'},
        ])

    return(
        <div>
            <div>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="../images/D2.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="../images/d3.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="../images/d1.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                <div>

                </div>
                </div>
                <h3 className="new-arr">
                    NEW ARRIVIAL ABAYAS
                </h3>
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
                <h3 className="new-arr">
                    NEW ARRIVIAL HIJABS
                </h3>
                <div>
                <div className="abaya-container">
                {hijab.map((hijab) => (
                <div className="abaya-card">
                <Link to="/details" state={{from:hijab}}><img src={hijab.image} alt={hijab.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{hijab.name}</p>
                <h6>Rs. {hijab.price} PKR</h6>
                    <button className='b1' >
                        <img src='../images/shopping-bag.png' alt='l' style={{width:'21px',height:'21px',marginRight:'3%',marginBottom:'1%'}}/>ADD TO CART</button>
                     </div>
                     </div>
                 ))}

            </div>
                </div>
        </div>
    )
}export default Content;