import React,{ useState, Component,useEffect } from 'react';
import Pagination from 'react-paginating';
import { Link} from 'react-router-dom';
import _ from 'lodash';

import withGoodstoreService from '../../../hoc/with-goodstore-service';
import {connect} from "react-redux";
import {dataLoaded,pageSizeLoaded,dataError,dataRequsted} from "../../../../actions";
import Spiner from '../../../spinner';
import { withRouter } from 'react-router-dom';
import { URL } from '../../../../const';



/*======================================================================*/
class PaginContainer extends Component {
	
    constructor(props) {
        super();
      
        this.state={
            currentPage:parseInt(props.match.currentPage, 10) || 1
        }      
    }
    
    componentDidMount() {        
		const {history, match,goodstoreService,pageSize} = this.props;
        const { id,currentPage } = match.params;
        this.setState({currentPage:parseInt(currentPage, 10) || 1});
       

        dataRequsted();       
		goodstoreService.getData(id,pageSize).then(this.props.dataLoaded);       
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {    
            
			const {history, match, goodstoreService, pageSize} = this.props;
      const { id,currentPage } = match.params;//id из URL пути
      
     
			
			if (this.props.match.url !== prevProps.match.url) {
                this.setState({currentPage:1});
                
				this.props.goodstoreService.getData(id,pageSize).then(this.props.dataLoaded).catch((err)=>dataError(err));
            }   
    };
    
             

    render() {
        const {loading,data,sort,match} = this.props; 
        const {id}= match.params;	
        

   const handlePageChange =page =>{ 
    this.setState({currentPage:page});
    
  };


    const limit = 2;
    const pageCount = 9;   

    if(sort ==='Asc'){
      console.log("Sort = "+ sort);
    data.items.sort((a,b)=> a.price > b.price ? 1: -1);//сортируем по возрастающей цене
    }else{
      console.log("Sort = "+ sort);
      data.items.sort((a,b)=> a.price < b.price ? 1: -1);//сортируем по возрастающей цене
    }

    const items = _.chunk(data.items,pageCount);
  
    const total = items.length * limit; 
    const {currentPage} =this.state;
   
    

    const urlImg =URL + "/api/web/images/";

        //=================================


		     
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
                            начало
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
                            конец
                          </button>
                        </div>
                      )}
                    </Pagination>
                   
                    <div className="pagination-container">
                    {items[currentPage - 1].map(item => 
            
                          <div className="col-sm-6 col-md-4 wow fadeInUp" key={item.id}>
                          <div className="products">				
                            <div className="product">		
                              <div className="product-image">
                              <span>Артикул: {item.vendor}</span>
                                <div className="image">
            
                                  <Link to={'/detail/'+ item.id + '/'+ id + '/' + this.state.currentPage} >
                                    <img className="imgItem" src={urlImg + "l"+ item.vendor + ".jpg"}  alt=""/>
                                  </Link>
                                  
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
                              <div className="cart clearfix animate-effect ">				
                              </div>
                            </div>      
                          </div>
                          </div>
                    
                    )}
                     </div>
                    
                            
                                 
            
                    <Pagination total={total} limit={limit} pageCount={pageCount} currentPage={currentPage} className="pagin">
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
                            начало
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
                            конец
                          </button>
                        </div>
                      )}
                    </Pagination> 
                  </div>
                  

        );
    }
}

/*===================================================================================================================*/
const mapStateToProps = ({ loading,pageSize,data,error,sort }) => {
    return {
       	data,
        pageSize,
        error ,
        loading ,
        sort    
    };
}

	const mapDispathToProps ={	
		dataLoaded,
        pageSizeLoaded,
        dataError,
        dataRequsted
};



export default withRouter(withGoodstoreService()(connect(mapStateToProps,mapDispathToProps)(PaginContainer)));


