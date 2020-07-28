export default class GoodstoreServices {
    getGoods() {
        return [
            { id: 1, vendor: 66441, main_group: 1, sub_group: 2, item: "Бак 150л пищевой с крышкой", price: 1200 },
            { id: 2, vendor: 63442, main_group: 1, sub_group: 1, item: "Аптечка 'Скорая помощь'    ПЦ3756", price: 850 },
            { id: 3, vendor: 56881, main_group: 1, sub_group: 2, item: "Бак 32л, эм. р-2829 (сереголуб.)", price: 1600 },
        ];
    }


    _apiBase = "http://goodmarket74.local/";

    getRecourse = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, recived ${res.status}`);
        }
        const body = await res.json();
        return body;
    };

    getFurnitures = async(id = 2) => {
        return this.getRecourse(`items?per-page=1000&category=${id}`)
    };

    getMaingroups = async() => {
            const data = await this.getRecourse(`maingroup`);
            console.log(data);
            return data;
        }
        /*getMaingroups = () => {
            return [
                { id: 1, title: 'Кухня' },
                { id: 2, title: 'Сад' },
                { id: 3, title: 'Разное' }
            ];
        }*/

}