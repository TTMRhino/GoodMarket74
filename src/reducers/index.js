const initialState = {
    items: [],
    main_groups: [],
    sub_groups: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ITEM_LOADED':
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
            };

        case 'MAINGROUP_LOADED':
            return {
                ...state,
                main_groups: action.payload,
                loading: false,
                error: null,
            };
        case 'SUBGROUP_LOADED':
            return {
                ...state,
                sub_groups: action.payload,
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

        case 'FETCH_SUBGROUPS_SUCCESS':
            return {
                ...state,
                sub_groups: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
};

export default reducer;