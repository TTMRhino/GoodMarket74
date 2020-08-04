const initialState = {
    data: {
        items: [],
        main_groups: [],
        sub_groups: [],
    },
    loading: true,
    error: null,
    pageSize: 9
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'DATA_LOADED':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case 'DATA_REQUESTED':
            return {
                data: [],
                loading: true,
                error: null,
            };
        case 'DATA_ERROR':
            return {
                data: [],
                loading: false,
                error: action.paload,
            };




        case 'PAGESIZE_LOADED':
            return {
                ...state,
                pageSize: action.payload,
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
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };

        default:
            return state;
    }
};

export default reducer;