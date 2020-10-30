import { URL } from '../const';
export default class GoodstoreServices {

    _apiBase = URL + "/api/web/";

    getRecourse = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, recived ${res.status}`);
        }
        const body = await res.json();
        return body;
    };

    async getItem(id = 1) {
        const item = await this.getRecourse(`items/${id}`);
        return item;
    }

    async getData(sub_group = 0, pageSize = 3) {
        let data = {};
        let timestamp = 0;


        timestamp = parseInt(localStorage['goodMarket.data.timestamp'], 10);



        if (localStorage['goodMarket.data.items'] && (timestamp + 30000 > Date.now())) {

            const items = JSON.parse(localStorage['goodMarket.data.items']);
            //отбираем нужные группы товаров
            //console.log('под группа = ' + sub_group);
            (sub_group !== 0) ? data.items = items.filter((item) => { return item.sub_group === sub_group }): data.items = items;

            //console.info(data.items);

            data.main_groups = JSON.parse(localStorage['goodMarket.data.main_groups']);
            data.sub_groups = JSON.parse(localStorage['goodMarket.data.sub_groups']);
            data.topitems = JSON.parse(localStorage['goodMarket.data.topitems']); //await this.getRecourse(`topsales`); 
            //data.topitems = await this.getRecourse(`topsales`);

            return data;
        }

        //data.items = await this.getRecourse(`items?pageSize=${pageSize}&sub_group=${sub_group}`);
        data.items = await this.getRecourse(`items?pageSize=7000`);
        data.main_groups = await this.getRecourse(`maingroup`);
        data.sub_groups = await this.getRecourse(`subgroup`);
        data.topitems = await this.getRecourse(`topsales`);

        console.log("Обновляли данные!");
        //помещаем данные о группах и товарах ВСЕ ВСЕ в локалное хранилище (что бы не лазить на сервер)
        localStorage['goodMarket.data.timestamp'] = Date.now() + 300;
        localStorage['goodMarket.data.main_groups'] = JSON.stringify(data.main_groups);
        localStorage['goodMarket.data.sub_groups'] = JSON.stringify(data.sub_groups);
        localStorage['goodMarket.data.items'] = JSON.stringify(data.items);
        localStorage['goodMarket.data.topitems'] = JSON.stringify(data.topitems);

        return data;
    };


}