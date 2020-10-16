import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spiner from '../../../spinner';

import withGoodstoreService from '../../../hoc/with-goodstore-service';
import { connect } from "react-redux";
import { dataLoaded, dataError, dataRequsted } from "../../../../actions";
import { withRouter } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import ErrorIndicator from '../../../error-indicator';
import { URL } from '../../../../const';

const TopItem = ({ props }) => {
    const { data} = props;

	//оставляем для ТОП продаж 6 обьекта
    const topItems=data.topitems;
    const items = data.items;

    //const topItems=data.items.slice(0,3);	
    

    const url =URL+"/api/web/images/";

    return (
            <div>
                <OwlCarousel className="owl-carousel best-seller custom-carousel  outer-top-xs">

{			
        topItems.map((item)=>{
                const id =item.item_id;
                console.log('id  = '+ id);
            return(
                
                <div className="item" key={item.id}>
        <div className="products best-product">

            <div className="product">
                <div className="product-micro">
                    <div className="row product-micro-row">
                        <div className="col col-xs-5">
                            <div className="">
                                <div className="image">
                                    <Link to={"detail/"+item.id}>
                                        <img src={url + 'l'+items[id].vendor +'.jpg'} alt="" />
                                    </Link>					
                                </div>				
                            </div>
                        </div>
                        <div className="col2 col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><Link to={"detail/"+items[id].id}>{items[id].item}</Link></h3>
                                <div className="rating rateit-small">											
                                </div>
                                <div className="product-price">	
                                    <span className="price">
                                        {items[id].price} руб.
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

<div>
  <h2>O НАС</h2>
</div>
            </div>
    );
}


/*=============================================================================================== */

class TopItemContainer extends Component {
	
    constructor(props) {
        super();
    }
    componentDidMount() {		
     
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
            <TopItem  props={this.props} />

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


export default withRouter(withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(TopItemContainer)));

