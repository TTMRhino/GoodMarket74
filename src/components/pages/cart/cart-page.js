import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {itemAddedToCart,itemRemovedFromCart,allItemRemoveFromCart } from "../../../actions";

const CartPage = ({cartItems, orderTotal, onIncrease, onDecrease, onDelete}) => {
	const urlImg ="http://goodmarket74.local/api/web/images/";
    return (
        <div>
			<div className="body-content outer-top-xs" id="top-banner-and-menu">
        <div className="container">
            <div className="row">



         <div className="shopping-cart">
				<div className="shopping-cart-table ">
	                <div className="table-responsive">
		                <table className="table">

                        <thead>
                            <tr>
                                <th className="cart-romove item">Удалить</th>
                                <th className="cart-description item">Картинка</th>
                                <th className="cart-product-name item">Наименование</th>
                                
                                <th className="cart-qty item">Количество</th>
                                <th className="cart-sub-total item">Сумма</th>
                                <th className="cart-total last-item">Всего</th>
                            </tr>
			            </thead>

                       

                        <tbody>

						{
							cartItems.map((item, idx)=>{
								return (
									<tr key={item.id}>
                            <td className="romove-item">
								<Link to="#" title="cancel" className="icon" onClick={() =>onDelete(item.id)}>
									<i className="fa fa-trash-o"></i>
								</Link>
							</td>
                            <td className="cart-image">
                                <a className="entry-thumbnail" href={urlImg + "l"+ item.vendor + ".jpg"}>
                                    <img src={urlImg + "l"+ item.vendor + ".jpg"} alt=""/>
                                </a>
                            </td>
                            <td className="cart-product-name-info">
                                <h4 className='cart-product-description'><a href="detail.html">{item.item}</a></h4>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="rating rateit-small"></div>
                                    </div>
                                    
                                </div>
                              
                            </td>
                            
                          

                            <td className="cart-product-quantity">
                                <div className="quant-input">
                                    <div className="arrows">

                                        <div className="arrow plus gradient" onClick={() =>onIncrease(item.id)}>
                                            <span className="ir">
												<i className="icon fa fa-sort-asc"></i>
											</span>
                                        </div>

                                        <div className="arrow minus gradient" onClick={() =>onDecrease(item.id)}>
											<span className="ir">
												<i className="icon fa fa-sort-desc">
													</i>
												</span>
										</div>


                                	</div>
                                        <input type="text" value={item.count}/>
                                </div>
                            </td>
								<td className="cart-product-sub-total"><span className="cart-sub-total-price">{item.price}</span></td>
								<td className="cart-product-grand-total"><span className="cart-grand-total-price">{item.total}</span></td>
				        </tr>
								)
							})
						}

                        

                        </tbody>
			              
	                    </table>
                    </div> 
                </div> 
				<hr/>

                <div className="col-md-8 col-sm-12 estimate-ship-tax">
	<table className="table">
		<thead>
			<tr>
				<th>
					<span className="estimate-title">Доставка и оплата</span>
					<p>Укажите адрес доставки.</p>
				</th>
			</tr>
		</thead>
		<tbody>
				<tr>
					<td>
						<div className="form-group">
							<label className="info-title control-label">ФИО <span>*</span></label>
							<input className="form-control unicase-form-control selectpicker"/>							
						</div>
						<div className="form-group col-md-6">
							<label className="info-title control-label">Телефон <span>*</span></label>
							<input className="form-control unicase-form-control selectpicker"/>																					
						</div>
						<div className="form-group col-md-6">
							<label className="info-title control-label">Индекс <span>*</span></label>
							<input className="form-control unicase-form-control selectpicker"/>																					
						</div>
						<div className="form-group">
							<label className="info-title control-label">Адрес <span>*</span></label>
							<input className="form-control unicase-form-control selectpicker"/>								
						</div>
						
						
					</td>
				</tr>
		</tbody>
	</table>
</div>







<div className="col-md-4 col-sm-12 cart-shopping-total">
	<table className="table">
		<thead>
			<tr>
				<th>
					<div className="cart-sub-total">
						Сумма<span className="inner-left-md">{orderTotal}</span>
					</div>
					<div className="cart-grand-total">
					Всего<span className="inner-left-md">{orderTotal}</span>
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
				<tr>
					<td>
						<div className="cart-checkout-btn pull-right">
							<button type="submit" className="btn btn-primary checkout-btn">Оформить заказ</button>
							
						</div>
					</td>
				</tr>
				
			</tbody>
		</table>
	</div>


    



            </div> 
        </div> 
		</div>
		</div>
		</div>
    
    );
};

const mapStateToProps = ({cartItems,orderTotal}) =>{
	return{
		cartItems,
		orderTotal
	};
}

const mapDispatchToProps = {

		onIncrease:itemAddedToCart,
		onDecrease:itemRemovedFromCart,
		onDelete:allItemRemoveFromCart 
	
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);