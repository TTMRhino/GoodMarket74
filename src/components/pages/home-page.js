import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
  




	<div  className="product-micro">
	<div  className="row product-micro-row">
		<div className="col col-xs-5">
			<div className="product-image">
				<div className="image">
					<Link to="#">	<img src="assets/images/products/p30.jpg" alt=""/></Link>			
				
						</div>
		</div>		
								
		</div>
		<div className="col col-xs-7">
			<div className="product-info">
				<h3 className="name"><Link to="#">Мольбер детский</Link></h3>
				<div className="rating rateit-small">

				</div>
				<div className="product-price">	
				<span className="price">
					1200.00				</span>
				
			</div>
				
			</div>
		</div>
		</div>
		</div>
		</div>
	

        

    );
    
};

export default HomePage;