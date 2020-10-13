import React from 'react';
import { CaruselPage } from '../index';
import { Link,} from 'react-router-dom';
import MenuCatalog from './menu-catalog';
import TopItem from './topItem';
import OwlCarousel from 'react-owl-carousel';

const HomePage = ({props}) => {			 

	const style1 ={'backgroundImage': 'url(assets/images/sliders/01.jpg)'}
	const style2 ={'backgroundImage': 'url(assets/images/sliders/02.jpg)'}
    return (
		<div>
			
			<div className="body-content outer-top-xs" id="top-banner-and-menu">
        	<div className="container">
            <div className="row">
				
		<MenuCatalog />
		

	<div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder ">

		
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

	<TopItem/>

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



export default HomePage;

