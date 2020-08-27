import store from '../../../store';

const postTools = (data, items) => {
    data = JSON.stringify(data);
    let id_order = xhr('http://goodmarket74.local/api/web/customers', data); //записываем заказ и получаем id клиента из бд

    /*for (let i = 0; i <= items.length - 1; i++) {

        let item = `{"id_order":"${id_order}","furniture_id":"${items[i].id}","quantities":"${items[i].quantity}" }`;

        console.log("Id_order = " + id_order);

        xhr('http://yii2-api/booking', item);
    }*/


    //let state = store.getState();
    //console.log(state);
    let action = { type: 'ITEM_CLEAR_CART' };
    store.dispatch(action); //изменяем state на прямую
    //console.log(store.getState());

}

const xhr = (url, data) => {
    console.log('data : ');
    console.log(data);
    let xhrs = new XMLHttpRequest();
    xhrs.open('POST', url, false);
    xhrs.setRequestHeader('Content-Type', "application/json");

    xhrs.send(data);

    //  xhrs.onload = function(e) {
    if (xhrs.readyState === 4) {
        let response = JSON.parse(xhrs.response); //возвращае id созданной в бд записи
        console.log("Тутточки = >" + response.id);
        console.log(response);

        if (xhrs.status !== 200) {
            // обработать ошибку
            console.log(xhrs.status + ': ' + xhrs.statusText); // пример вывода: 404: Not Found

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