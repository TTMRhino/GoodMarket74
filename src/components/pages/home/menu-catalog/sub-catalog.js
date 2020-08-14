import React ,{Component} from 'react';
import { Link} from 'react-router-dom';

const SubCatalog = ({sub_groups}) => {
    
    return(
        sub_groups.map((sub_group)=>{
            return (
                <Link className="" to={"/catalog/"+ sub_group.id}>
                        <ul className="links list-unstyled sub_menu" key={sub_group.id}>  
                            <li>                            
                                {sub_group.title}
                            </li>
                        </ul> 
                </Link>
                    
                    
                    ); }
            ))
        }                  
 

export default SubCatalog;