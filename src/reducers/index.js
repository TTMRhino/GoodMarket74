const initialState = {
    items: [
        { id: 1, vendor: 66441, main_group: 1, sub_group: 2, item: "Бак 150л пищевой с крышкой", price: 1200 },
        { id: 2, vendor: 63442, main_group: 1, sub_group: 1, item: "Аптечка 'Скорая помощь'    ПЦ3756", price: 850 },
        { id: 3, vendor: 56881, main_group: 1, sub_group: 2, item: "Бак 32л, эм. р-2829 (сереголуб.)", price: 1600 },
    ],
    main_groups: [
        /* { id: 1, title: 'Кухня' },
         { id: 2, title: 'Сад' },
         { id: 3, title: 'Разное' }*/
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ITEMS_LOADED':
            return {
                items: action.payload
            };
        case 'MAINGROUP_LOADED':
            return {
                ...state,
                main_groups: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_MAINGROUPS_SUCCESS':
            return {
                ...state,
                main_groups: action.payload,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
};

export default reducer;