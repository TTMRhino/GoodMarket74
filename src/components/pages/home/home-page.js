import React from 'react';
import { CaruselPage } from '../index';
import { Link, withRouter } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';



const HomePage = () => {
	const style1 ={'background-image': 'url(assets/images/sliders/01.jpg)'}
	const style2 ={'background-image': 'url(assets/images/sliders/02.jpg)'}
    return (
		<div>
			
			<div className="body-content outer-top-xs" id="top-banner-and-menu">
        <div className="container">
            <div className="row">
				

        <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
			
		
			<div className="side-menu animate-dropdown outer-bottom-xs ">
    			<div className="head">
					<i className="icon fa fa-align-justify fa-fw"></i> КАТАЛОГ
				</div>        
    				<nav className="yamm megamenu-horizontal" role="navigation">


					<ul class="dropright nav"> 
						<li  class=" dropdown-toggle px-3" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false">
								
								<Link> <i className="icon fa fa-shopping-bag" aria-hidden="true"></i> ГРУППАОСНОВНАЯ </Link>
							
						</li>
								<ul className="dropdown-menu mega-menu">
									<li className=" ">
										<div className="row ">
											<div className="col-sm-12 col-md-3">
												<ul className="links list-unstyled ">  
													<li>
														<Link class="" to="#">Подгруппа</Link>
													</li>
												</ul>
											</div>
										</div>
									</li>		
								</ul>
					</ul>        			
    				</nav>
				</div>
		</div>

	<div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">

		
	<div id="hero">	

	<OwlCarousel  id="owl-main" className="owl-carousel  " items="1" autoplay loop   >

    	<div className="item" style = {style1} >
			<div className="container-fluid">
				<div className="caption bg-color vertical-center text-left">
					<div className="slider-header fadeInDown-1">Новинка</div>
						<div className="big-text fadeInDown-1">
							Гладильная Доска Ника 3+
						</div>

						<div className="excerpt fadeInDown-2 hidden-xs">					
							<span>Гладить одно удовольствие</span>
						</div>
						<div className="button-holder fadeInDown-3">
							<Link to="index.php?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Купить</Link>
						</div>
					</div>
				</div>
			</div>

    
		<div className="item" style = {style2}>
			<div className="container-fluid">
				<div className="caption bg-color vertical-center text-left">
                 <div className="slider-header fadeInDown-1">Акция</div>
					<div className="big-text fadeInDown-1">
						Лестница <span className="highlight">Залеська </span>
					</div>

					<div className="excerpt fadeInDown-2 hidden-xs">
						 
					<span>Высшее качество исполнения</span>
					
					</div>
					<div className="button-holder fadeInDown-3">
						<Link to="index.php?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Купить</Link>
					</div>
				</div>
			</div>
		</div>
		
    	 
	</OwlCarousel>

	</div>


<div className="info-boxes wow fadeInUp">
	<div className="info-boxes-inner">
		<div className="row">
			<div className="col-md-6 col-sm-4 col-lg-4">
				<div className="info-box">
					<div className="row">
						
						<div className="col-xs-12">
							<h4 className="info-box-heading green">Гарантия</h4>
						</div>
					</div>	
					<h6 className="text">Гарантия по Закону потребителя</h6>
				</div>
			</div>

			<div className="hidden-md col-sm-4 col-lg-4">
				<div className="info-box">
					<div className="row">
						
						<div className="col-xs-12">
							<h4 className="info-box-heading green">Доставка*</h4>
						</div>
					</div>
					<h6 className="text">При заказе более 1000 рублей привезем бесплатно.</h6>	
				</div>
			</div>

			<div className="col-md-6 col-sm-4 col-lg-4">
				<div className="info-box">
					<div className="row">
						
						<div className="col-xs-12">
							<h4 className="info-box-heading green">Акции и Бонусы</h4>
						</div>
					</div>
					<h6 className="text">Система скидок постоянным клиентам </h6>	
				</div>
			</div>
		</div>
	</div>
	
</div>	


<div className="best-deal wow fadeInUp outer-bottom-xs">
	<h3 className="section-title">ТОП продаж</h3>
	<div className="sidebar-widget-body outer-top-xs">

	<OwlCarousel className="owl-carousel best-seller custom-carousel  outer-top-xs">


	        <div className="item">
	        	<div className="products best-product">
		        	<div className="product">
						<div className="product-micro">
							<div className="row product-micro-row">
								<div className="col col-xs-5">
									<div className="product-image">
										<div className="image">
											<Link to="#">
												<img src="assets/images/products/p20.jpg" alt="" />
											</Link>					
										</div>				
									</div>
								</div>
								<div className="col2 col-xs-7">
									<div className="product-info">
										<h3 className="name"><Link to="#">Стул детский</Link></h3>
										<div className="rating rateit-small">											
										</div>
										<div className="product-price">	
											<span className="price">
												325.00 руб.
											</span>				
										</div>			
									</div>
								</div>
							</div>
						</div>
      
					</div>
		        	<div className="product">
						<div className="product-micro">
							<div className="row product-micro-row">
								<div className="col col-xs-5">
									<div className="product-image">
										<div className="image">
											<Link to="#">
												<img src="assets/images/products/p21.jpg" alt=""/>
											</Link>					
										</div>					
									</div>
								</div>
								<div className="col2 col-xs-7">
									<div className="product-info">
										<h3 className="name"><Link to="#">Floral Print Buttoned</Link></h3>
										<div className="rating rateit-small"></div>
											<div className="product-price">	
												<span className="price">
													$450.99				
												</span>
				
											</div>			
										</div>
									</div>
								</div>
						</div>      
					</div>
		        </div>
	        </div>



	    		        <div className="item">
	        	<div className="products best-product">
		        							<div className="product">
							<div className="product-micro">
	<div className="row product-micro-row">
		<div className="col col-xs-5">
			<div className="product-image">
				<div className="image">
					<Link to="#">
						<img src="assets/images/products/p22.jpg" alt=""/>
					</Link>					
				</div>
					
					
								</div>
		</div>
		<div className="col2 col-xs-7">
			<div className="product-info">
				<h3 className="name"><Link to="#">Floral Print Buttoned</Link></h3>
				<div className="rating rateit-small"></div>
				<div className="product-price">	
				<span className="price">
					$450.99				</span>
				
			</div>
			
			</div>
		</div>
	</div>
</div>
      
						</div>
		        							<div className="product">
							<div className="product-micro">
	<div className="row product-micro-row">
		<div className="col col-xs-5">
			<div className="product-image">
				<div className="image">
					<Link to="#">
						<img src="assets/images/products/p23.jpg" alt=""/>
						</Link>					
				</div>
					
					
											
								</div>
		</div>
		<div className="col2 col-xs-7">
			<div className="product-info">
				<h3 className="name"><Link to="#">Floral Print Buttoned</Link></h3>
				<div className="rating rateit-small"></div>
				<div className="product-price">	
				<span className="price">
					$450.99				</span>
				
			</div>
		
			</div>
		</div>
	</div>
</div>
      
						</div>
		        		        	</div>
	        </div>
	    		        <div className="item">
	        	<div className="products best-product">
		        							<div className="product">
							<div className="product-micro">
	<div className="row product-micro-row">
		<div className="col col-xs-5">
			<div className="product-image">
				<div className="image">
					<Link to="#">
						<img src="assets/images/products/p24.jpg" alt=""/>
					</Link>					
				</div>
											
					
					
								</div>
		</div>
		<div className="col2 col-xs-7">
			<div className="product-info">
				<h3 className="name"><Link to="#">Floral Print Buttoned</Link></h3>
				<div className="rating rateit-small"></div>
				<div className="product-price">	
				<span className="price">
					$450.99				</span>
				
			</div>
		
			</div>
		</div>
	</div>
</div>
      
						</div>
		        							<div className="product">
							<div className="product-micro">
	<div className="row product-micro-row">
		<div className="col col-xs-5">
			<div className="product-image">
				<div className="image">
					<Link to="#">
						<img src="assets/images/products/p25.jpg" alt=""/>
					</Link>					
				</div>
					
					
								</div>
		</div>
		<div className="col2 col-xs-7">
			<div className="product-info">
				<h3 className="name"><Link to="#">Floral Print Buttoned</Link></h3>
				<div className="rating rateit-small"></div>
				<div className="product-price">	
				<span className="price">
					$450.99				</span>
				
			</div>
			
			</div>
		</div>
	</div>
</div>
      
						</div>
		        		        	</div>
	        </div>
	    		        <div className="item">
	        	<div className="products best-product">
		        							<div className="product">
							<div className="product-micro">
	<div className="row product-micro-row">
		<div className="col col-xs-5">
			<div className="product-image">
				<div className="image">
					<Link to="#">
						<img src="assets/images/products/p26.jpg" alt=""/>
								</Link>					
				</div>
											
					
					
								</div>
		</div>
		<div className="col2 col-xs-7">
			<div className="product-info">
				<h3 className="name"><Link to="#">Floral Print Buttoned</Link></h3>
				<div className="rating rateit-small"></div>
				<div className="product-price">	
				<span className="price">
					$450.99				</span>
				
			</div>
	
			</div>
		</div>
	</div>
</div>
      
						</div>
		        							<div className="product">
							<div className="product-micro">
	<div className="row product-micro-row">
		<div className="col col-xs-5">
			<div className="product-image">
				<div className="image">
					<Link to="#">
						<img src="assets/images/products/p27.jpg" alt=""/>
					</Link>					
				</div>
					
					
								</div>
		</div>
		<div className="col2 col-xs-7">
			<div className="product-info">
				<h3 className="name">
					<Link to="#">Floral Print Buttoned</Link>
				</h3>
				<div className="rating rateit-small"></div>
				<div className="product-price">	
				<span className="price">
					$450.99				</span>
				
			</div>
	
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
</OwlCarousel>

</div>
</div>	 
	</div>
	</div>
	
	<CaruselPage />
				</div>
				
				</div>
				

	</div>

    );
    
};

export default withRouter(HomePage);