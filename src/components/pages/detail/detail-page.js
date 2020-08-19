import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CaruselPage from '../carusel/carusel-page';

import withGoodstoreService from '../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import {itemLoaded,itemError,itemRequsted,itemAddedToCart} from "../../../actions";
import Spiner from '../../spinner';
import { withRouter } from 'react-router-dom';


const Detail = ({props}) => {
    const {item, onAddedToCart} = props;

    const urlImg ="http://goodmarket74.local/api/web/images/";
    return (

<div className='container'>
		<div className='single-product my-20' >

    
        <div className="detail-block">
			<div className="row  wow fadeInUp">
                
			    <div className="col-xs-12 col-sm-6 col-md-5 gallery-holder">
                    <div className="product-item-holder size-big single-product-gallery small-gallery">

                        <div id="owl-single-product">
                            <div className="single-product-gallery-item" id="slide1">
                                <a data-lightbox="image-1" data-title="Gallery" href={urlImg + "l"+ item.vendor + ".jpg"}>
                                    <img className="img-responsive" alt="" src={urlImg + "l"+ item.vendor + ".jpg"} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 

					<div className='col-sm-6 col-md-7 product-info-block'>
						<div className="product-info">
							<h3 className="name">{item.item}</h3>					

							<div className="stock-container info-container m-t-10">
								
							</div>

							<div className="description-container m-t-20">
                                {item.description}
							</div>

							<div className="price-container info-container m-t-20">
								<div className="row">
									

									<div className="col-sm-6">
										<div className="price-box">
											<span className="price">{item.price} руб.</span>											
										</div>
									</div>

									<div className="col-sm-6">
										
									</div>

								</div>
							</div>

							<div className="quantity-container info-container">
								<div className="row">
									
									<div className="col-sm-2">
										<span className="label">Количесво :</span>
									</div>
									
									<div className="col-sm-2">
										<div className="cart-quantity">
											<div className="quant-input">
								                <div className="arrows">
								                  <div className="arrow plus gradient"><span className="ir"><i className="icon fa fa-sort-asc"></i></span></div>
								                  <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
								                </div>
								                <input type="text" value={1}/>
							              </div>
							            </div>
									</div>

									<div className="col-sm-7">
										<button to="#" className="btn btn-primary" onClick={()=>onAddedToCart(item.id)}>
											<i className="fa fa-shopping-cart inner-right-vs">
											</i> 
											Добавить в Корзину
										</button>
									</div>

									
								</div>
							</div>
						</div>
					</div>
				</div>
                </div>
              
                </div>
                <CaruselPage />
                </div>

    );
};

/*======================================================================*/
class DetailContainer extends Component {
	
    constructor(props) {
        super();
    }

    componentDidMount() {
		const {history, match,goodstoreService} = this.props;
        const { id } = match.params;
        
        //dataRequsted();
       
        goodstoreService.getItem(id).then(this.props.itemLoaded);	
            
	}
	
	
		componentDidUpdate(prevProps, prevState, snapshot) {
			
			const {history, match, goodstoreService, pageSize} = this.props;
			const { id } = match.params;
			
			if (this.props.match.url !== prevProps.match.url) {
				this.props.goodstoreService.getItem(id).then(this.props.itemLoaded).catch((err)=>itemError(err));
            }
          
		};
	         
        
    render() {
		const {loading} = this.props; 		
		     
        if (loading){				
            return (
            <div className="container">
                <div className="row">
                    <Spiner className=" d-flex justify-content-center"/>	
                </div>
            </div>
                );
        }
      
        return (
            <Detail  props={this.props} />

        );
    }
}

/*===================================================================================================================*/
const mapStateToProps = ({ loading,item,error }) => {
    return {
       	item,        
        error ,
        loading     
    };
}

	const mapDispathToProps ={
	
		itemLoaded,      
		itemError,
		onAddedToCart:(id)=>itemAddedToCart(id),	
		
		//dataRequsted
	
};



export default withRouter(withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(DetailContainer)));
