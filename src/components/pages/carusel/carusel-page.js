import React from 'react';
import { Link } from 'react-router-dom';


const CaruselPage = () => {
    return (
       <div id="brands-carousel" className="logo-slider wow fadeInUp">

    <div className="logo-slider-inner">
        <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
            <div className="item m-t-15">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
           

            <div className="item m-t-10">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
          

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
           

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
          

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
          

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
            

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
            

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
            

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
            

            <div className="item">
                <Link to="#" className="image">
                    <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
                </Link>
            </div>
            
        </div>
        
    </div>
    

</div>
    );
}

export default CaruselPage;