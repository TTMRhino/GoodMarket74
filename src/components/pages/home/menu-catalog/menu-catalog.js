import React ,{Component} from 'react';
import { Link,NavLink} from 'react-router-dom';
import SubCatalog from './sub-catalog';
import Spiner from '../../../spinner';

import withGoodstoreService from '../../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import {dataLoaded,pageSizeLoaded,dataError} from "../../../../actions";
import { withRouter } from 'react-router-dom';

import { slide as Menu } from 'react-burger-menu'

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



           
     
     {/**=======================MENU==================================== */}
                                               {/* меню гармошка для мобильного размера ===начало===*/} 
                                             <div className="nav-bg-class side-menu animate-dropdown outer-bottom-xs MobileMenu-2">
                                             
                                             <div className="head">
                                                 <i className="icon fa fa-align-justify fa-fw"></i> КАТАЛОГ
                                             </div> 

                                                <div className="navbar-header ">                                                
                                                    <button data-target="#mc-horizontal-menu-collapse1 " data-toggle="collapse" className="navbar-toggle collapsed" type="button">                                                        
                                                        <i className="icon fa fa-arrow-down fa-2x"></i>                                                       
                                                    </button>
                                                </div>

                                                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse1">
                                                    <div className="nav-outer">
                                                        <ul className="nav navbar-nav">
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
                                                            
                                                        </ul>
                                                        <div className="clearfix"></div>				
                                                    </div>
                                                </div>                                
                                            </div>
                                            {/* меню гармошка для мобильного размера ===клонец===*/} 

    <div className="nav-bg-class side-menu animate-dropdown outer-bottom-xs Full-size-Menu-2">
        <div className="head">
            <i className="icon fa fa-align-justify fa-fw"></i> КАТАЛОГ
        </div> 

        <script type="text/javascript" src="https://vk.com/js/api/openapi.js?168">
        </script>
        
        <div id="vk_groups"></div>
            <script type="text/javascript">
                {/*VK.Widgets.Group("vk_groups", { mode: 3 }, 193409870);*/}
            </script>


        <div className="navbar-header ">                                                
            <button data-target="#mc-horizontal-menu-collapse1 " data-toggle="collapse" className="navbar-toggle collapsed" type="button">                                                        
                <i className="icon fa fa-arrow-down fa-2x"></i>                                                       
            </button>
        </div>

        <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse1">                                    

            {
                 main_groups.map((main_group)=>{                            
                    const data = sub_groups.filter( sub_group => sub_group.id_maingroup === main_group.id);                                                                                                                              
                    return(
                        <div>
                            <div className="dropdown dropright nonMobileMenu" key={main_group.id}>
                        
                                <button type="button" className="btn btn-light dropdown-toggle btn-menu" data-toggle="dropdown">
                                    <i className="icon fa fa-shopping-bag " ></i> 
                                   <span className="spanMenu"> {main_group.title}</span>
                                </button>
                                <div className="dropdown-menu ">
                                    <SubCatalog sub_groups={data} />
                                </div>
                            </div>

                                        {/*Мобильная версия меню */}
                            <div className="dropdown  MobileMenu">
                                <button type="button" className="btn btn-light dropdown-toggle btn-menu" data-toggle="dropdown">
                                    <i className="icon fa fa-shopping-bag " ></i> 
                                    <span className="spanMenu"> {main_group.title}</span>
                                </button>
                                <div className="dropdown-menu">
                                    <SubCatalog sub_groups={data} />
                                </div>
                            </div>
                        </div>

                            
                        );
                }) 
            }
        </div>            

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
          /*=============== TEST =============*/   
          
                state = {
                    collapse1: false,
                    collapseID: ''
                }
                
                toggleCollapse = collapseID => () => {
                    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
                }
                
                toggleSingleCollapse = collapseId => {
                    this.setState({
                    ...this.state,
                    [collapseId]: !this.state[collapseId]
                    });
                }
          /*=============== TEST =============*/ 

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
            <div>
             <MenuCatalog id="menu" className="menu-item"  props={this.props} />
            
             </div>

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

