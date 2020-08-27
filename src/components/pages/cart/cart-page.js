import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {itemAddedToCart,itemRemovedFromCart,allItemRemoveFromCart,deliverAdd } from "../../../actions";
import postTools from "./postTool";

import { useForm } from "react-hook-form";

const CartPage = ({cartItems, orderTotal,deliver, onIncrease, onDecrease, onDelete,onDeliver}) => {
	const urlImg ="http://goodmarket74.local/api/web/images/";
console.log(`deliver = `+deliver);
	//пердупреждение о повышенных тарифах (для определенных городов)
	const [ displaView, setView ] = useState('none')
	const onChangeHandler = (event) =>{
		console.log(event.target.value);
		if (event.target.value === 'Миасс'){
			setView('block');
			onDeliver(100);
		}else{
			setView('none');
			onDeliver(0);
		}
		
	}

	//валидация формы
	const { register, handleSubmit, watch, errors } = useForm();
	  const onSubmit = data => postTools(data);
	  

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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">

							<label className="info-title control-label">ФИО <span>*</span></label>
							<input name="name" ref={register({ required: true, maxLength: 50,pattern: /^[A-Za-z]+$/i,minLength: 4 })} 
							className="form-control unicase-form-control selectpicker"/>
							{errors.name && <span className="text-danger">Введите корректное имя и фамилию!</span>}

						</div>
						<div className="form-group col-md-6">

							<label className="info-title control-label">Телефон <span>*</span></label>
							<input name="phone" ref={register({ required: true, maxLength: 15,pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){5,14}(\s*)?$/i,minLength: 4 })} 
							className="form-control unicase-form-control selectpicker"/>
							{errors.phone && <span className="text-danger">Введите корректный номер телефона!</span>}	

						</div>
						<div className="form-group col-md-6">
							<label className="info-title control-label">Индекс </label>
							<input name="mailindex" ref={register({maxLength:20})}
							className="form-control unicase-form-control selectpicker"/>																					
						</div>
						<div className="form-group">

							<label className="info-title control-label">Город <span>*</span></label>
							<select name="city" ref={register({ required: true })}
								className="form-control unicase-form-control selectpicker"
								onChange={onChangeHandler} >
							<option></option>	
							<option value="Челябинск">Челябинск</option>
							<option value="Миасс">Миасс</option>
							</select>
							{errors.city && <span className="text-danger">Выберети город!</span>}

						</div>
						<div className="form-group">

							<label className="info-title control-label">Адрес <span>*</span></label>
							<input name="adress" ref={register({ required: true,maxLength:30,minLength: 5 })}
							className="form-control unicase-form-control selectpicker"/>
							{errors.adress && <span className="text-danger">Введите корректный адрес!</span>}								
						</div>

						<div className="form-group">
							<label className="info-title control-label">Коментарий </label>							
							<textarea name="comments" ref={register({ maxLength:200 })}
							className="form-control unicase-form-control selectpicker" 
							rows="7" cols="45">
							</textarea>	
							{errors.comments && <span className="text-danger">Не больше 200 символов!</span>}						
						</div>
						
					</form>	
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
					<div className="cart-sub-total">
					Доставка<span className="inner-left-md">{deliver}</span>
					</div>
					<div className="cart-grand-total">
					Всего<span className="inner-left-md">{orderTotal + deliver}</span>
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
				<tr>
					<td>
						<div className="cart-checkout-btn pull-right">
						<form onSubmit={handleSubmit(onSubmit)}>
							<button type="submit" className="btn btn-primary checkout-btn">Оформить заказ</button>							
						</form>
						</div>
					</td>
				</tr>
				
			</tbody>
		</table>
	</div>

	<div className="col-md-4 col-sm-12 cart-shopping-total">
	<table className="table">
		<thead>
			<tr style={{display: displaView}}>
				<th>
				 <p className="text-danger" >
					 «Стоимость уточняйте у менеджера! Пункт выдачи товара г.Миасс, ул. Радищева, д. 18.»</p>
				 						Доставка по городу Миасс до адреса клиента 100 рублей.

				</th>
			</tr>
		</thead>
		
		</table>
	</div>


    



            </div> 
        </div> 
		</div>
		</div>
		</div>
    
    );
};

const mapStateToProps = ({cartItems,orderTotal,deliver}) =>{
	return{
		cartItems,
		orderTotal,
		deliver
	};
}

const mapDispatchToProps = {

		onIncrease:itemAddedToCart,
		onDecrease:itemRemovedFromCart,
		onDelete:allItemRemoveFromCart,
		onDeliver:deliverAdd, 
	
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);