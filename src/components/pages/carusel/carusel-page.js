import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';


const CaruselPage = () => {
    const style_width = {'width': '100px'};
    return (
        <div className="row">
       <div id="brands-carousel" className="logo-slider wow fadeInUp">

    <div className="logo-slider-inner">


    <OwlCarousel id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme" autoplay loop>


            <div className="item  center-block" style={style_width}>
                <Link to="#" className="image">
                    <img  src="assets/images/brands/brand1.png" alt=""/>
                </Link>
            </div>
           

            <div className="item center-block" style={style_width}>
                <Link to="#" className="image">
                    <img src="assets/images/brands/brand2.png" alt=""/>
                </Link>
            </div>
          

            <div className="item center-block" style={style_width}>
                <Link to="#" className="image">
                    <img  src="assets/images/brands/brand3.png" alt=""/>
                </Link>
            </div>
           

            <div className="item center-block" style={style_width}>
                <Link to="#" className="image">
                    <img  src="assets/images/brands/brand4.png" alt=""/>
                </Link>
            </div>
          

            <div className="item center-block"  style={style_width}>
                <Link to="#" className="image">
                    <img  src="assets/images/brands/brand5.png" alt=""/>
                </Link>
            </div>
          

            <div className="item center-block" style={style_width}>
                <Link to="#" className="image">
                    <img  src="assets/images/brands/brand6.png" alt=""/>
                </Link>
            </div>           
            
        </OwlCarousel>
        
    </div>
    

</div>
</div>
    );
}

export default CaruselPage;