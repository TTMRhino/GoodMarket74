import React from 'react';
import { Link } from 'react-router-dom';

const CatalogPage = () => {
    return (
    <div> 


<div class="col-xs-12 col-sm-12 col-md-3 sidebar">

<div className="side-menu animate-dropdown outer-bottom-xs">
    <div className="head">
        <i className="icon fa fa-align-justify fa-fw"></i> КАТАЛОГ
    </div>        
        <nav className="yamm megamenu-horizontal" role="navigation">
        <ul className="nav">
                <li className="dropdown menu-item">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i class="icon fa fa-shopping-bag" aria-hidden="true"></i>
                    ГРУППАОСНОВНАЯ
                </Link>
                     <ul className="dropdown-menu mega-menu">
                        <li className="yamm-content">
                            <div className="row">
                                <div className="col-sm-12 col-md-3">
                                    <ul className="links list-unstyled">  
                                         <li>
                                             <Link to="#">Подгруппа</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </li>                   
                    </ul>           
            </li>
        </ul>
        </nav>
    </div>
</div>


<div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
            <div className="clearfix filters-container m-t-10">
	<div className="row">
		
		<div className="col col-sm-12 col-md-6">
			<div className="col col-sm-3 col-md-6 no-padding">
				<div className="lbl-cnt">
					<span className="lbl">Сортировка</span>
					<div className="fld inline">
						<div className="dropdown dropdown-small dropdown-med dropdown-white inline">
							<button data-toggle="dropdown" type="button" className="btn dropdown-toggle">
								Товар <span className="caret"></span>
							</button>

							<ul role="menu" className="dropdown-menu">
								<li role="presentation"><Link to="#">Товар</Link></li>
								<li role="presentation"><Link to="#">Цена:Сначала дешевые</Link></li>
								<li role="presentation"><Link to="#">Цена:Сначала дорогие</Link></li>
								<li role="presentation"><Link to="#">Алфавит</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="col col-sm-3 col-md-6 no-padding">
				<div className="lbl-cnt">
					<span className="lbl">Показывать</span>
					<div className="fld inline">
						<div className="dropdown dropdown-small dropdown-med dropdown-white inline">
							<button data-toggle="dropdown" type="button" className="btn dropdown-toggle">
								1 <span className="caret"></span>
							</button>

							<ul role="menu" className="dropdown-menu">
								<li role="presentation"><Link to="#">1</Link></li>
								<li role="presentation"><Link to="#">2</Link></li>
								<li role="presentation"><Link to="#">3</Link></li>
								<li role="presentation"><Link to="#">4</Link></li>
								<li role="presentation"><Link to="#">5</Link></li>
								<li role="presentation"><Link to="#">6</Link></li>
								<li role="presentation"><Link to="#">7</Link></li>
								<li role="presentation"><Link to="#">8</Link></li>
								<li role="presentation"><Link to="#">9</Link></li>
								<li role="presentation"><Link to="#">10</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="col col-sm-6 col-md-4 text-right">
			<div className="pagination-container">
	<ul className="list-inline list-unstyled">
		<li className="prev"><Link to="#"><i className="fa fa-angle-left"></i></Link></li>
		<li><Link to="#">1</Link></li>	
		<li className="active"><Link to="#">2</Link></li>	
		<li><Link to="#">3</Link></li>	
		<li><Link to="#">4</Link></li>	
		<li className="next"><Link to="#"><i className="fa fa-angle-right"></i></Link></li>
	</ul>
</div>
	</div>
</div>
				<div className="search-result-container ">
					<div id="myTabContent" className="tab-content category-list">
						<div className="tab-pane active " id="grid-container">
							<div className="category-product">
								<div className="row">									
										
		<div className="col-sm-6 col-md-4 wow fadeInUp">
			<div className="products">
				
	<div className="product">		
		<div className="product-image">
			<div className="image">
				<Link to="detail.html"><img  src="assets/images/products/p5.jpg" alt=""/></Link>
			</div>			

			                        		   
		</div>
			
		
		<div className="product-info text-left">
			<h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
			
			<div className="description"></div>

			<div className="product-price">	
				<span className="price">
					$450.99				</span>
										     
									
			</div>
			
		</div>
					<div className="cart clearfix animate-effect">
				
			</div>
			</div>
      
			</div>
		</div>
	

	
			</div>
		</div>
		
										
							</div>
						</div>
					</div>
					<div className="clearfix filters-container">
						
							<div className="text-right">
						         <div className="pagination-container">
	<ul className="list-inline list-unstyled">
		<li className="prev"><Link to="#"><i className="fa fa-angle-left"></i></Link></li>
		<li><Link to="#">1</Link></li>	
		<li className="active"><Link to="#">2</Link></li>	
		<li><Link to="#">3</Link></li>	
		<li><Link to="#">4</Link></li>	
		<li className="next"><Link to="#"><i className="fa fa-angle-right"></i></Link></li>
	</ul>
</div>
						
					</div>

				</div>
    </div>
    </div>
    </div>
   
    );
};

export default CatalogPage;