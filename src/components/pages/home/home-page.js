import React, {Component} from 'react';
import { CaruselPage } from '../index';
import { Link,} from 'react-router-dom';
import MenuCatalog from './menu-catalog';
import withGoodstoreService from '../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import {dataLoaded,dataRequsted,dataError} from "../../../actions";
import Spiner from '../../spinner';
import ErrorIndicator from '../../error-indicator';



import OwlCarousel from 'react-owl-carousel';



const HomePage = ({props}) => {	
	
	const { data,loading} = props;
	
	const urlImg ="http://goodmarket74.local/images/";
		 


	 console.log(data.main_groups);
	const style1 ={'backgroundImage': 'url(assets/images/sliders/01.jpg)'}
	const style2 ={'backgroundImage': 'url(assets/images/sliders/02.jpg)'}
    return (
		<div>
			
			<div className="body-content outer-top-xs" id="top-banner-and-menu">
        	<div className="container">
            <div className="row">
				
		<MenuCatalog main_groups={data.main_groups} sub_groups={data.sub_groups} loading={loading}/>
		

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

		{			
				data.items.map((item)=>{					
					return(
						<div className="item" key={item.id}>
	        	<div className="products best-product">

		        	<div className="product">
						<div className="product-micro">
							<div className="row product-micro-row">
								<div className="col col-xs-5">
									<div className="product-image">
										<div className="image">
											<Link to="#">
												<img src={urlImg + 'l'+item.vendor +'.jpg'} alt="" />
											</Link>					
										</div>				
									</div>
								</div>
								<div className="col2 col-xs-7">
									<div className="product-info">
										<h3 className="name"><Link to="#">{item.item}</Link></h3>
										<div className="rating rateit-small">											
										</div>
										<div className="product-price">	
											<span className="price">
												{item.price} руб.
											</span>				
										</div>			
									</div>
								</div>
							</div>
						</div>      
					</div>
				</div>
	        </div>
					)
				})
				 
			
			
		}
				
		
		
	        

	

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



class HomePageContainer extends Component {
	
    constructor(props) {
        super();
    }
    componentDidMount() {
	
        //this.props.fetchMaingroups();
		const {goodstoreService,dataError} = this.props;
		dataRequsted();
		goodstoreService.getData().then(this.props.dataLoaded).catch((err)=>dataError(err));	
       
    }
         

    render() {
		const {loading,error} = this.props; 
		       
        	if (loading){				
           	 return (
				<div className="container">
					<div className="row">
						<Spiner className=" d-flex justify-content-center"/>	
					</div>
				</div>
					);
			}
			
			if(error){
				return(
					<ErrorIndicator/>
				);
			}
        return (
            <HomePage  props={this.props} />

        );
    }
}

/*===================================================================================================================*/
const mapStateToProps = ({loading,data,error }) => {
    return {      
		data,
		loading,
		error		    
    };
}

	

const mapDispathToProps ={
		dataLoaded,
		dataRequsted,
		dataError
};


export default withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(HomePageContainer));

