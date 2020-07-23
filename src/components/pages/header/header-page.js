import React from 'react';
import { Link,NavLink } from 'react-router-dom';


const HeaderPage = () => {
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
                                <img src="assets/images/logo.png" alt=""/>                            
                            </Link>
                        </div>
                        </div>       
        
                        <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">       
                            <div className="search-area">
                                <form>
                                    <div className="control-group">                               
                                        <input className="search-field" placeholder="Введите наименование товара..." />                                
                                        <Link className="search-button" to="#" ></Link>                                    
                                    </div>
                                </form>
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
                                                <span className="count">2</span>
                                            </div>
                                            <div className="total-price-basket">
                                                <span className="lbl">Итог: </span>
                                                <span className="total-price">
                                                    <span className="sign"></span><span className="value">1200.00</span>
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
                                                            <li className="active dropdown yamm-fw">
                                                                <Link to="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">GoodMarket74</Link>
                                                                </li>
                                                                <li className="dropdown">
                                                                    <Link to="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Меню сайта</Link>
                                                                    <ul className="dropdown-menu pages">
                                                                        <li>
                                                                            <div className="yamm-content">
                                                                                <div className="row">                                                                
                                                                                    <div className="col-xs-12 col-menu">
                                                                                        < ul className="links">
                                                                                            <li><NavLink to="/">GoodMarket74</NavLink></li>
                                                                                            <li><NavLink to="/catalog">Каталог</NavLink></li>
                                                                                            <li><NavLink to="/cart">Корзина</NavLink></li>
                                                                                            <li><NavLink to="/contact">Контакты</NavLink></li>                                                                        
                                                                                        </ul>
                                                                                    </div>                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </li>                                                    
                                                                    </ul>
                                                                </li>
                                                            
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

export default HeaderPage;