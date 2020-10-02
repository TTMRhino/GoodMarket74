import store from '../../../store';
import { URL } from '../../../const';


const postTools = (data, items, total_sum) => {
    data.total_sum = total_sum;
    console.log("total sum test!");
    console.log(data);
    const url = URL + "/api/web/";

    data = JSON.stringify(data);
    let id_customer = xhr(url + 'customers', data); //записываем заказ и получаем id клиента из бд

    for (let i = 0; i <= items.length - 1; i++) {

        let item = `{"customer_id":"${ id_customer }","item_id":"${items[i].id}","quantity":"${items[i].count}" }`;


        xhr(url + 'orders', item);
    }


    //let state = store.getState();    
    let action = { type: 'ITEM_CLEAR_CART' };
    store.dispatch(action); //изменяем state на прямую  
    //let action_purchase = { type: 'DATA_PURCHASE' };
    // store.dispatch(action_purchase); //изменяем state на прямую


}

const xhr = (url, data) => {

    let xhrs = new XMLHttpRequest();
    xhrs.open('POST', url, false);
    xhrs.setRequestHeader('Content-Type', "application/json");

    xhrs.send(data);

    //  xhrs.onload = function(e) {
    if (xhrs.readyState === 4) {
        let response = JSON.parse(xhrs.response); //возвращае id созданной в бд записи
        // console.log("Тутточки = >" + response.id);
        // console.log(response);

        if (xhrs.status !== 200) {
            // обработать ошибку
            // console.log(xhrs.status + ': ' + xhrs.statusText); // пример вывода: 404: Not Found

            return response.id;
        } else {
            // вывести результат

            //console.log(xhrs.responseText); // responseText -- текст ответа.
            return response.id;
        }
    }
    //};

}






export default postTools;