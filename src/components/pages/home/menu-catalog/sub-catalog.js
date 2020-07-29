import React ,{Component} from 'react';
import { Link} from 'react-router-dom';

const SubCatalog = ({sub_groups}) => {
    //console.log(sub_groups);
    return(
        sub_groups.map((sub_group)=>{
            return (
                 sub_groups.map((sub_group)=>{
                     return(
                        <ul className="links list-unstyled " key={sub_group.id}>  
                            <li>
                                <Link class="" to="#">{sub_group.title}</Link>
                            </li>
                        </ul> 
                    );
                    }
                    ) 
            )
                }
        ))               
 
}


export default SubCatalog;