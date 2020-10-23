import React from 'react';
import { CaruselPage } from '../index';
import { Link,} from 'react-router-dom';
import MenuCatalog from './menu-catalog';
import TopItem from './topItem';
import OwlCarousel from 'react-owl-carousel';

const HomePage = ({props}) => {			 

	const style1 ={'backgroundImage': 'url(assets/images/sliders/01.jpg)'}
	const style2 ={'backgroundImage': 'url(assets/images/sliders/02.jpg)'}
    return (
		<div>
			
			<div className="body-content outer-top-xs" id="top-banner-and-menu">
        	<div className="container">
            <div className="row">
				
		<MenuCatalog />
		

	<div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder ">

		
	<div id="hero">	

	<OwlCarousel  id="owl-main" className="owl-carousel  " items="1" autoplay loop   >

    	<div className="item" style = {style1} >
			<div className="container-fluid">
				<div className="caption bg-color vertical-center text-left">
					<div className="slider-header fadeInDown-1"></div>
						<div className="big-text fadeInDown-1">
							
						</div>

						<div className="excerpt fadeInDown-2 hidden-xs">					
							<span></span>
						</div>
						
					</div>
				</div>
			</div>

    
		<div className="item" style = {style2}>
			<div className="container-fluid">
				<div className="caption bg-color vertical-center text-left">
                 <div className="slider-header fadeInDown-1"></div>
					<div className="big-text fadeInDown-1">
						 <span className="highlight"> </span>
					</div>

					<div className="excerpt fadeInDown-2 hidden-xs">
						 
					<span></span>
					
					</div>
					
				</div>
			</div>
		</div>
		
    	 
	</OwlCarousel>

	</div>


<div className="info-boxes wow fadeInUp">
	<div className="info-boxes-inner">
		<div className="row">
			<div className="col-md-6 col-sm-4 col-lg-4">
				<div className="info-box">
					<div className="row">
						
						<div className="col-xs-12">
							<h4 className="info-box-heading green">Гарантия</h4>
						</div>
					</div>	
					<h6 className="text">Гарантия по Закону потребителя</h6>
				</div>
			</div>

			<div className="hidden-md col-sm-4 col-lg-4">
				<div className="info-box">
					<div className="row">
						
						<div className="col-xs-12">
							<h4 className="info-box-heading green">Доставка*</h4>
						</div>
					</div>
					<h6 className="text">При заказе более 1000 рублей привезем бесплатно.</h6>	
				</div>
			</div>

			<div className="col-md-6 col-sm-4 col-lg-4">
				<div className="info-box">
					<div className="row">
						
						<div className="col-xs-12">
							<h4 className="info-box-heading green">Акции и Бонусы</h4>
						</div>
					</div>
					<h6 className="text">Система скидок постоянным клиентам </h6>	
				</div>
			</div>
		</div>
	</div>
	
</div>	


<div className="best-deal wow fadeInUp outer-bottom-xs">
	<h3 className="section-title">ТОП продаж</h3>
	<div className="sidebar-widget-body outer-top-xs ">

	<TopItem/>

</div>
</div>


<div className="best-deal about">
	<h3 className="section-title">О нас</h3>
	<div className="sidebar-widget-body outer-top-xs ">

<p className=" about-p">
GoodMarket74 была образованна в 2019 году и начинала свою деятельность как фирма торгующая товарами для дома, сада, детскими товарами, электроинструментом. В настоящее время в GoodMarket74 работает дружный, сплочённый коллектив со дня основания фирмы. Стратегия развития компании строится на стремлении максимально удовлетворить существующий спрос на товары, предлагаемые нами.
GoodMarket74  —  реализует товары на Урале таких фирм как: 
ООО «Вилина» (г. С-Петербург), ООО «Ника» (г. Ижевск), ЗМИ (г. Соликамск), Сарай-лы (Турция), Тюмрай (Турция) и предлагает следующую продукцию: самоклеющаяся пленка,  клеенка, акваматы, доски гладильные, карнизы потолочные, стремянки, вешалки напольные и настенные.
Мы с радостью поможем Вам подобрать необходимый товар. Наши  квалифицированные специалисты проконсультируют Вас по каждой группе товаров, дадут свои рекомендации по их использованию. По вашему желанию доставим выбранные Вами товары в удобное время по указанному адресу бесплатно от 1000 рублей в чеке или 100 рублей по городу Челябинск до 1000 рублей в чеке. Так же мы успешно работаем по всей Челябинской области, доставляя товар транспортными компаниям по максимально приемлемым ценам.
</p>
 
<span>В нашей компании действуют три основополагающих принципа работы:</span>
	<ul>
		<li>высокое качество всех товаров и услуг;</li>
		<li>разумная ценовая политика;</li>
		<li>внимательное отношение к каждому клиенту.
				Индивидуальный подход к каждому покупателю позволяет нам находить наиболее эффективные схемы сотрудничества. Мы не стремимся совершить одну-две выгодные для нас сделки, не учитывающие интересы наших покупателей. Наша цель — долгосрочное и взаимовыгодное сотрудничество. Благодаря нашим постоянным покупателям мы достигли сегодняшнего успеха и надеемся его развивать в будущем.</li>
	</ul>

<p className="about-p">Если Вы станете нашим постоянным покупателем, Вы приобретете максимально выгодные условия поставки наших товаров, получив дополнительные скидки.
Мы заинтересованы в долгосрочном и плодотворном сотрудничестве!</p>



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



export default HomePage;

