import React ,{Component} from 'react';
import { Link} from 'react-router-dom';
import withGoodstoreService from '../../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import Spiner from '../../../spinner';
import {fetchMaingroups,maingroupsLoaded} from "../../../../actions";

const MenuCatalog = ({main_groups}) => {
    return(
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar">	
            <div className="side-menu animate-dropdown outer-bottom-xs ">
                <div className="head">
                    <i className="icon fa fa-align-justify fa-fw"></i> КАТАЛОГ
                </div>        
                    <nav className="yamm megamenu-horizontal" role="navigation">                    
                        {
                            main_groups.map((main_group)=>{
                                return(
                                        <ul class="dropright nav" key={main_group.id}> 
                                            <li  class=" dropdown-toggle px-3" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">                            
                                                <Link> <i className="icon fa fa-shopping-bag" aria-hidden="true"></i> {main_group.title} </Link>                        
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
                                    );
                                }) 
                            }       			
                    </nav>
            </div>
        </div>
    );
};


class MainGroupCategorieContainer extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {

        //this.props.fetchMaingroups();
        const {goodstoreService} = this.props;
        const data = goodstoreService.getMaingroups();
        //console.log(data);
         this.props.maingroupLoaded(data);
    }

    render() {
        const {main_groups, loading} = this.props;
        
        if (loading){
            return <Spiner />
        }
        return (

            <MenuCatalog main_groups={main_groups} props={this.props} />

        );
    }
}

const mapStateToProps = ({ main_groups }) => {
    return {
        main_groups       
    };
}
const mapDispathToProps = (dispath) =>{
    return{
        maingroupLoaded:(newMaingroup) =>{
           dispath(maingroupsLoaded(newMaingroup)) ; 
        }
    };
};


export default withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(MainGroupCategorieContainer));