import React ,{Component} from 'react';
import { Link} from 'react-router-dom';
import SubCatalog from './sub-catalog';
import Spiner from '../../../spinner';

import withGoodstoreService from '../../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import {dataLoaded,pageSizeLoaded,dataError} from "../../../../actions";
import { withRouter } from 'react-router-dom';

const MenuCatalog = ({props}) => {
    const {data} = props;
    const  {main_groups,sub_groups,loading} = data;

    

  if(loading){
      return(
          <Spiner/>
      );
  }
    return(        
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar">



            <div className="side-menu animate-dropdown outer-bottom-xs ">
                <div className="head">
                    <i className="icon fa fa-align-justify fa-fw"></i> КАТАЛОГ
                </div>
                <nav className="yamm megamenu-horizontal" role="navigation">
                <div id="accordion">
                {
                            main_groups.map((main_group)=>{
                         
                                const data = sub_groups.filter( sub_group => sub_group.id_maingroup === main_group.id);                                                      
                                    
                                return(
                                        <ul className="dropright  nav" key={main_group.id}>                                         
                                            
                                                <li className="px-3" data-toggle="collapse" data-target={"#collapseOne"+main_group.id} aria-expanded="true" aria-controls={"collapseOne"+main_group.id}>
                                                <Link to="#" className={data.length===0?"":"arrows_menu"}> <i className="icon fa fa-shopping-bag " aria-hidden="true"></i> {main_group.title} </Link>
                                                </li>                                           
                                            
                                            <div id={"collapseOne"+main_group.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordion" >
                                                
                                                    <SubCatalog sub_groups={data} />
                                               
                                            </div>
                                        </ul>
                                          );
                                        }) 
                                    }      
                    
                </div>
                </nav>     
                    
            </div>
     
        </div>
    );
};




/*======================================================================*/
class MenuCatalogContainer extends Component {
	
    constructor(props) {
        super();
    }
    componentDidMount() {
       
		const {history, match,goodstoreService,pageSize} = this.props;
        const { id } = match.params;	
		
     
		goodstoreService.getData(id,pageSize).then(this.props.dataLoaded).catch((err)=>dataError(err));	
		
			      
	}
	
	
		componentDidUpdate(prevProps, prevState, snapshot) {
			
			const {history, match,goodstoreService,pageSize} = this.props;
			const { id } = match.params;
			
			if (this.props.match.url !== prevProps.match.url) {
				this.props.goodstoreService.getData(id,pageSize).then(this.props.dataLoaded);
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
            <MenuCatalog  props={this.props} />

        );
    }
}

/*===================================================================================================================*/
const mapStateToProps = ({loading, pageSize,data }) => {
    return {
       	data,
        pageSize,
        loading      
    };
}

const mapDispathToProps ={	
	dataLoaded,
	pageSizeLoaded
};




export default withRouter(withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(MenuCatalogContainer)));

