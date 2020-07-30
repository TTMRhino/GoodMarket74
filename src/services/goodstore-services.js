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

    getItems = async(sub_group = 0) => {
        return await this.getRecourse(`items?sub_group=${sub_group}&per-page=1000`);
    };

    getMaingroups = async() => {
        const data = await this.getRecourse(`maingroup`);
        return data;
    }

    getSubgroups = async() => {
        const data = await this.getRecourse(`subgroup`);
        return data;
    }


}