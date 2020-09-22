import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const ContactPage = () => {
    return (
        <div>

<div className="body-content outer-top-xs" id="top-banner-and-menu">
        <div className="container">
            <div className="row">

            <div className="contact-page">
		<div className="row">
			
				<div className="col-md-12 contact-map outer-bottom-vs">
					<Iframe url="https://maps.google.com/maps?q=%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%20%D0%9C%D0%B0%D1%81%D0%BB%D0%BE%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%205&t=&z=17&ie=UTF8&iwloc=&output=embed" width="600" height="450"  />
				</div>
				<div className="col-md-9 contact-form">
	<div className="col-md-12 contact-title">
		<h4>Обратная связь</h4>
	</div>
	<div className="col-md-4 ">
		<form className="register-form" >
			<div className="form-group">
		    <label className="info-title" for="exampleInputName">Имя <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputName" placeholder=""/>
		  </div>
		</form>
	</div>
	<div className="col-md-4">
		<form className="register-form" >
			<div className="form-group">
		    <label className="info-title" for="exampleInputEmail1">E-mail: <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder=""/>
		  </div>
		</form>
	</div>
	<div className="col-md-4">
		<form className="register-form" >
			<div className="form-group">
		    <label className="info-title" for="exampleInputTitle">Заголовок <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputTitle" placeholder="Title"/>
		  </div>
		</form>
	</div>
	<div className="col-md-12">
		<form className="register-form" >
			<div className="form-group">
		    <label className="info-title" for="exampleInputComments">Комментарий <span>*</span></label>
		    <textarea className="form-control unicase-form-control" id="exampleInputComments"></textarea>
		  </div>
		</form>
	</div>
	<div className="col-md-12 outer-bottom-small m-t-20">
		<button type="submit" className="btn-upper btn btn-primary checkout-page-button">Отправить сообщение</button>
	</div>
</div>
<div className="col-md-3 contact-info">
	<div className="contact-title">
		<h4>Информация</h4>
	</div>
	<div className="clearfix address">
		<span className="contact-i"><i className="fa fa-map-marker"></i></span>
		<span className="contact-span">454091, г. Челябинск, ул. Маслобазовая 5, оф.8</span>
	</div>
	<div className="clearfix phone-no">
		<span className="contact-i"><i className="fa fa-mobile"></i></span>
		<span className="contact-span"><a href="tel:+79000741791">+79000741791</a></span>
	</div>
	<div className="clearfix email">
		<span className="contact-i"><i className="fa fa-envelope"></i></span>
		<span className="contact-span"><a href="mailto:GoodMarket74@mail.ru">GoodMarket74@mail.ru</a></span>
	</div>
</div>			</div>
		</div>
		</div>
		</div>
		</div>
            </div>
    );
};

export default ContactPage;