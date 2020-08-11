import React,{ useState } from 'react';
import Pagination from 'react-paginating';
import { Link,} from 'react-router-dom';
import _ from 'lodash';


const Pagin = ({data}) => {
  

  const [currentPage, setcurrentPage] = useState(1);
  

   const handlePageChange =page =>{ 
    setcurrentPage(page);
  };

    const limit = 2;
    const pageCount = 9;    

    
    const items = _.chunk(data.items,pageCount); 
    const total = items.length * limit; 
   
    

    const urlImg ="http://goodmarket74.local/images/";
    return (
        
      <div>     
        
        {items[currentPage - 1].map(item => 

              <div className="col-sm-6 col-md-4 wow fadeInUp" key={item.id}>
              <div className="products">				
                <div className="product">		
                  <div className="product-image">
                    <div className="image">
                      <Link to="detail.html"><img  src={urlImg + "l"+ item.vendor + ".jpg"} alt=""/></Link>
                    </div>													
                  </div>
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">{item.item}</a></h3>			
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
            <div>
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

export default Pagin;


