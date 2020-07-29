import React ,{Component} from 'react';
import { Link} from 'react-router-dom';
import withGoodstoreService from '../../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import Spiner from '../../../spinner';
import {fetchMaingroups,maingroupsLoaded,subgroupsLoaded} from "../../../../actions";
import SubCatalog from './sub-catalog';

const MenuCatalog = ({main_groups,sub_groups}) => {
   
    return(
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar">	
            <div className="side-menu animate-dropdown outer-bottom-xs ">
                <div className="head">
                    <i className="icon fa fa-align-justify fa-fw"></i> КАТАЛОГ
                </div>        
                    <nav className="yamm megamenu-horizontal" role="navigation">                    
                        {
                            main_groups.map((main_group)=>{

                           /* function getListIdx(arr, id) {
                                let listIdx = [];
                                let lastIndex = -1;
                                while ((lastIndex = arr.find(id, lastIndex + 1)) !== -1) {
                                    listIdx.push(lastIndex);
                                }
                                return listIdx;
                            }*/                           
                            
                              //const data =  sub_groups.map((sub_group)=>{
                                  // const data =  sub_groups.find((sub_group)=>sub_group.id_maingroup === main_group.id);
                                //});

                                const data = sub_groups.filter( sub_group => sub_group.id_maingroup === main_group.id);
                                

                                return(
                                        <ul class="dropright nav" key={main_group.id}> 
                                            <li  class=" dropdown-toggle px-3" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">                            
                                                <Link> <i className="icon fa fa-shopping-bag" aria-hidden="true"></i> {main_group.title} </Link>                        
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


class MainGroupCategorieContainer extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {

        //this.props.fetchMaingroups();
        const {goodstoreService} = this.props;
        goodstoreService.getMaingroups().then(this.props.maingroupLoaded);
        goodstoreService.getSubgroups().then(this.props.subgroupLoaded);
       
    }
         

    render() {
        const {main_groups, sub_groups, loading} = this.props;        
        if (loading){
            return <Spiner />
        }
        return (

            <MenuCatalog main_groups={main_groups} sub_groups={sub_groups} props={this.props} />

        );
    }
}

const mapStateToProps = ({ main_groups,sub_groups }) => {
    return {
        main_groups,
        sub_groups       
    };
}
const mapDispathToProps = (dispath) =>{
    return{
        maingroupLoaded:(newMaingroup) =>{
           dispath(maingroupsLoaded(newMaingroup)) ; 
        },
        subgroupLoaded:(newSubgroup) =>{
            dispath(subgroupsLoaded(newSubgroup));
        }
    };
};


export default withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(MainGroupCategorieContainer));