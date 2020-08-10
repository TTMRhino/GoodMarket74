export default class GoodstoreServices {

    _apiBase = "http://goodmarket74.local/";

    getRecourse = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, recived ${res.status}`);
        }
        const body = await res.json();
        return body;
    };

    async getData(sub_group = 0, pageSize = 3) {

        let data = {};
        data.items = await this.getRecourse(`items?pageSize=${pageSize}&sub_group=${sub_group}`);
        data.main_groups = await this.getRecourse(`maingroup`);
        data.sub_groups = await this.getRecourse(`subgroup`);

        return data;
    };


}