import React ,{Component} from 'react';
import { Link} from 'react-router-dom';
import SubCatalog from './sub-catalog';
import Spiner from '../../../spinner';

const MenuCatalog = ({main_groups,sub_groups,loading}) => {
  // console.log(sub_groups);
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
                        {
                            main_groups.map((main_group)=>{
                         
                                const data = sub_groups.filter( sub_group => sub_group.id_maingroup === main_group.id);                                                      
                                    
                                return(
                                        <ul className="dropright nav" key={main_group.id}> 
                                            <li  className=" dropdown-toggle px-3 " data-toggle={data.length===0?"":"dropdown"} aria-haspopup="true"aria-expanded="false">                            
                                                <Link to="#" className={data.length===0?"":"arrows_menu"}> <i className="icon fa fa-shopping-bag" aria-hidden="true"></i> {main_group.title} </Link>                        
                                                
                                            </li>  

                                            <ul className="dropdown-menu mega-menu" >
                                                <li className=" ">
                                                    <div className="row ">
                                                        <div className="col-sm-12 col-md-12">

                                                        <SubCatalog sub_groups={data} />
                                                         
                                                        </div>
                                                    </div>            
                                                </li>	        	
                                            </ul>                                                  
                                        </ul> 
                                    );
                                }) 
                            }       			
                    </nav>
            </div>
        </div>
    );
};




export default MenuCatalog;