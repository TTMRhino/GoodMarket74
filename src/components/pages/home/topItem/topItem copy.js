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
import _ from 'lodash';

const TopItem = ({ props }) => {
    const { data} = props;

	//оставляем для ТОП продаж 6 обьекта
    const topItems=data.topitems;
    //let items = data.items;
   
  const items = _.orderBy(data.items,['id'],['asc']);
   
    //console.log(items[0]);

    const url =URL+"/api/web/images/";

    return (
            <div>
               <div className="pagination-container top-sales">

{			
        topItems.map((item)=>{
          const id =item.item_id-1;
         // console.log( items) ;
            return(
                <div className="col-sm-6 col-md-4 wow fadeInUp mobile-padding" key={item.id}>
                          <div className="products">				
                            <div className="product">		
                              <div className="">
                              <span>Артикул: {items[id].vendor}</span>
                                <div className="image">
            
                                <Link to={"detail/"+items[id].id}>
                                  <img className="top-img" src={url + 'l'+items[id].vendor +'.jpg'} alt="" />
                                  </Link>
                                  
                                </div>													
                              </div>
                              <div className="product-info text-position">
                                
                                
                                <div className="product-price">	
                                  <span className="price">
                                    {items[id].price} руб.
                                  </span>								
                                </div>			
                              </div>
                              <div className="cart clearfix animate-effect ">				
                              </div>
                            </div>      
                          </div>
                          </div>
            )
        })
         
    
    
}

</div>
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

