import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {CaruselPage} from '../';
import MenuCatalog from '../home/menu-catalog';
import Pagin from './pagination/pagin';


const CatalogPage = () => {	
    return (
    <div> 
	<div className="body-content outer-top-xs" id="top-banner-and-menu">
        <div className="container">
            <div className="row">

			<MenuCatalog />


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
								9 <span className="caret"></span>
							</button>

							<ul role="menu" className="dropdown-menu">								
								<li role="presentation"><Link to="#">3</Link></li>								
								<li role="presentation"><Link to="#">6</Link></li>								
								<li role="presentation"><Link to="#">9</Link></li>
								<li role="presentation"><Link to="#">12</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		
	
</div>
				<div className="search-result-container ">
					<div id="myTabContent" className="tab-content ">
						<div className="tab-pane active " id="grid-container">
							<div className="category-product">
								<div className="row">									
								
									<div className="clearfix filters-container">						
										<div className="text-right">
											<div className="pagination-container">
												<Pagin />
											</div>
										</div>
									</div>								
								</div>
							</div>									
						</div>
					</div>
				</div>
					
    </div>
    </div>

	

    </div>
	<CaruselPage />
	</div>
	</div>
	</div>
   
    );
};

export default CatalogPage;
