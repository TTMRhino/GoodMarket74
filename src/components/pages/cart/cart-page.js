import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
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
                                <th className="cart-edit item">Изменить</th>
                                <th className="cart-qty item">Количество</th>
                                <th className="cart-sub-total item">Сумма</th>
                                <th className="cart-total last-item">Всего</th>
                            </tr>
			            </thead>

                       

                        <tbody>





                        <tr>
                            <td className="romove-item"><Link to="#" title="cancel" className="icon"><i className="fa fa-trash-o"></i></Link></td>
                            <td className="cart-image">
                                <Link className="entry-thumbnail" to="detail.html">
                                    <img src="assets/images/products/p1.jpg" alt=""/>
                                </Link>
                            </td>
                            <td className="cart-product-name-info">
                                <h4 className='cart-product-description'><a href="detail.html">Floral Print Buttoned</a></h4>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="rating rateit-small"></div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="reviews">
                                            (06 Reviews)
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-product-info">
                                                    <span className="product-color">COLOR:<span>Blue</span></span>
                                </div>
                            </td>
                            
                            <td className="cart-product-edit">
                                <Link to="#" className="product-edit">Edit</Link>
                            </td>

                            <td className="cart-product-quantity">
                                <div className="quant-input">
                                        <div className="arrows">
                                        <div className="arrow plus gradient">
                                            <span className="ir"><i className="icon fa fa-sort-asc"></i></span>
                                        </div>
                                        <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
                                        </div>
                                        <input type="text" value="1"/>
                                </div>
                            </td>
                            <td className="cart-product-sub-total"><span className="cart-sub-total-price">$300.00</span></td>
                            <td className="cart-product-grand-total"><span className="cart-grand-total-price">$300.00</span></td>
				        </tr>









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
							<label className="info-title control-label">Country <span>*</span></label>
							<select className="form-control unicase-form-control selectpicker">
								<option>--Select options--</option>
								<option>India</option>
								<option>SriLanka</option>
								<option>united kingdom</option>
								<option>saudi arabia</option>
								<option>united arab emirates</option>
							</select>
						</div>
						<div className="form-group">
							<label className="info-title control-label">State/Province <span>*</span></label>
							<select className="form-control unicase-form-control selectpicker">
								<option>--Select options--</option>
								<option>TamilNadu</option>
								<option>Kerala</option>
								<option>Andhra Pradesh</option>
								<option>Karnataka</option>
								<option>Madhya Pradesh</option>
							</select>
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
						Сумма<span className="inner-left-md">$600.00</span>
					</div>
					<div className="cart-grand-total">
						Всего<span className="inner-left-md">$600.00</span>
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

export default CartPage;