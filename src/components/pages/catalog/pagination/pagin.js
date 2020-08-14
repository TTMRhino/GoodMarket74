import React,{ useState, Component } from 'react';
import Pagination from 'react-paginating';
import { Link} from 'react-router-dom';
import _ from 'lodash';

import withGoodstoreService from '../../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import {dataLoaded,pageSizeLoaded,dataError,dataRequsted} from "../../../../actions";
import Spiner from '../../../spinner';
import { withRouter } from 'react-router-dom';


const Pagin = ({props}) => {
    const {data} = props;
    
  const [currentPage, setcurrentPage] = useState(1);
  

   const handlePageChange =page =>{ 
    setcurrentPage(page);
  };

    const limit = 2;
    const pageCount = 9;   

    
    const items = _.chunk(data.items,pageCount); 
    const total = items.length * limit; 
   
    

    const urlImg ="http://goodmarket74.local/api/web/images/";

 
    return (
        
      <div>

<Pagination total={total} limit={limit} pageCount={pageCount} currentPage={currentPage}>
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div className="lbl-cnt text-center">
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {'<'}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#fdce09' };
                }
                return (
                  <button
                    key={page}
                    style={activePage}
                    {...getPageItemProps({
                      pageValue: page,
                      onPageChange: handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {'>'}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
       

        {items[currentPage - 1].map(item => 

              <div className="col-sm-6 col-md-4 wow fadeInUp" key={item.id}>
              <div className="products">				
                <div className="product">		
                  <div className="product-image">
                    <div className="image">
                      <Link to={'/detail/'+ item.id}><img  src={urlImg + "l"+ item.vendor + ".jpg"} alt=""/></Link>
                    </div>													
                  </div>
                  <div className="product-info text-left">
                    <h3 className="name"><Link to={'/detail/'+ item.id}>{item.item}</Link></h3>			
                    <div className="description">							
                    </div>
                    <div className="product-price">	
                      <span className="price">
                        {item.price} руб.
                      </span>								
                    </div>			
                  </div>
                  <div className="cart clearfix animate-effect">				
                  </div>
                </div>      
              </div>
              </div>
        
        )}
        
                
                     

        <Pagination total={total} limit={limit} pageCount={pageCount} currentPage={currentPage}>
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (             
            <div className="lbl-cnt text-center ">
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {'<'}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#fdce09' };
                }
                return (
                  <button
                    key={page}
                    style={activePage}
                    {...getPageItemProps({
                      pageValue: page,
                      onPageChange: handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {'>'}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  
}

/*======================================================================*/
class PaginContainer extends Component {
	
    constructor(props) {
        super();
    }

    componentDidMount() {
		const {history, match,goodstoreService,pageSize} = this.props;
        const { id } = match.params;
        
        dataRequsted();
       
		goodstoreService.getData(id,pageSize).then(this.props.dataLoaded);	
        
       
	}
	
	
		componentDidUpdate(prevProps, prevState, snapshot) {
			
			const {history, match, goodstoreService, pageSize} = this.props;
			const { id } = match.params;
			
			if (this.props.match.url !== prevProps.match.url) {
				this.props.goodstoreService.getData(id,pageSize).then(this.props.dataLoaded).catch((err)=>dataError(err));
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
            <Pagin  props={this.props} />

        );
    }
}

/*===================================================================================================================*/
const mapStateToProps = ({ loading,pageSize,data,error }) => {
    return {
       	data,
        pageSize,
        error ,
        loading     
    };
}

	const mapDispathToProps ={	
		dataLoaded,
        pageSizeLoaded,
        dataError,
        dataRequsted
};



export default withRouter(withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(PaginContainer)));


