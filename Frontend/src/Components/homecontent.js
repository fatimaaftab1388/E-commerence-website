import '../asets/content.css';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Content(){
    const nav=new useNavigate();

    const abayapage=()=>{
        nav('/Components/abaya');
    }
    const hijabpage=()=>{
        nav('/Components/hijab')
    }
    const bundlepage=()=>{
        nav('/Components/hijabbundles')
    }
    
    

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
                    FANCY NEW ABAYAS
                </h3>
                <div>
                    <img src="../images/fatima.png" alt="aa" style={{width:'100%'}} onClick={abayapage}/>
                </div>
                <h3 className="new-arr">
                    OUR TRENDING HIJABS
                </h3>
                <div>
                    <img src="../images/fatima3.png" alt="aa" style={{width:'100%'}} onClick={hijabpage}/>
                </div>
                <h3 className="new-arr">
                    BEST HIJAB BUNDLES
                </h3>
                <div>
                    <img src="../images/fatima2.png" alt="aa" style={{width:'100%'}} onClick={bundlepage}/>
                </div>
                
        </div>
    )
}export default Content;