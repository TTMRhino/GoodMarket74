import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import {connect} from "react-redux";
//import {itemAddedToCart,itemRemovedFromCart,allItemRemoveFromCart } from "../../../actions";


const HeaderPage = ({orderTotal, orderCount}) => {
    return (
        <header className="header-style-1">

	
        <div className="top-bar animate-dropdown">
           
        </div>
        
          

        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">                            
                        <div className="logo">
                            <Link to="/">                                    
                                <img src="/assets/images/logo.png" alt=""/>                            
                            </Link>
                        </div>
                        </div>       
        
                        <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">       
                            <div className="search-area">
                               { /*<form>
                                    <div className="control-group">                               
                                        <input className="search-field" placeholder="Введите наименование товара..." />                                
                                        <Link className="search-button" to="#" ></Link>                                    
                                    </div>
                               </form>*/}
                               <img className="" src="/assets/images/sliders/plug.png" />
                            </div>
                            </div>
            
            
                            <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">   
                                <div className=" dropdown-cart">
                                    <Link to="/cart" className=" lnk-cart">
                                        <div className="items-cart-inner">
                                            <div className="basket">
                                                <i className="glyphicon glyphicon-shopping-cart"></i>
                                            </div>
                                            <div className="basket-item-count">
                                                <span className="count">{orderCount}</span>
                                            </div>
                                            <div className="total-price-basket">
                                                <span className="lbl">Итог: </span>
                                                <span className="total-price">
                                                    <span className="sign"></span>
                                                    <span className="value">{orderTotal}</span>                                                    
                                                </span>
                                            </div>                   
                                        </div>
                                    </Link>
                                    
                                </div>       
                            </div>       
                        </div>        
                    </div>        
                </div>
            
        




                                <div className="header-nav animate-dropdown">
                                    <div className="container">
                                        <div className="yamm navbar navbar-default" role="navigation">
                                            <div className="navbar-header">
                                                <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </button>
                                            </div>
                                            <div className="nav-bg-class">
                                                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                                                    <div className="nav-outer">
                                                        <ul className="nav navbar-nav">                                                           
                                                                <li><Link to="/">GoodMarket74</Link></li>
                                                                <li><Link to="/catalog">Каталог</Link></li>
                                                                <li><Link to="/cart">Корзина</Link></li>
                                                                <li><NavLink to="/contact">Контакты</NavLink></li>  
                                                            
                                                        </ul>
                                                        <div className="clearfix"></div>				
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                         
        </header>
        
    );
}
const mapStateToProps = ({cartItems,orderTotal,orderCount}) =>{
	return{
		cartItems,
        orderTotal,
        orderCount
	};
}

const mapDispatchToProps = {

	
	
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderPage);
//export default HeaderPage;