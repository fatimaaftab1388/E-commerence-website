import '../asets/content.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Content(){
    
    

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
                    <img src="../images/a5.png" alt="aa"/>
                </div>
                <h3 className="new-arr">
                    NEW ARRIVIAL HIJABS
                </h3>
                
        </div>
    )
}export default Content;