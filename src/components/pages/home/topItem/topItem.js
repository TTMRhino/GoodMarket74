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
   
  //const items = _.orderBy(data.items,['id'],['asc']);
   
   
    const url =URL+"/api/web/images/";

    return (
            <div>
               <div className="pagination-container ">

{			
        topItems.map((item)=>{
          const id =item.item_id-1;
        
            return(
                <div className="col-sm-6 col-md-4 wow fadeInUp mobile-padding" key={item.id}>
                          <div className="products">				
                            <div className="product">		
                              
                              <div className="product-image">
                              <span>Артикул: {item.vendor}</span>
                                <div className="image">
            
                                  <Link to={'/detail/'+ item.id } >
                                    <img className="imgItem" src={url + "l"+ item.vendor + ".jpg"}  alt=""/>
                                  </Link>
                                  
                                </div>													
                              </div>
                              <div className="product-info text-position">
                              <h3 className="name"><Link to={'/detail/'+ item.id}>{item.item}</Link></h3>
                                
                                <div className="product-price">	
                                  <span className="price">
                                    {item.price} руб.
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
  .
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

