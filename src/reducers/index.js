const initialState = {
    data: {
        items: [],
        main_groups: [],
        sub_groups: [],
    },
    item: {},
    loading: true,
    error: null,
    pageSize: 0,
    cartItems: [

    ],
    orderTotal: 220
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




            /*====================================================*/


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

        case 'FETCH_ITEM_SUCCESS':
            return {
                ...state,
                item: action.payload,
                loading: false,
                error: null
            };

            /*============CART OPERATIONS================== */
        case 'ITEM_ADDED_TO_CART':
            const itemId = action.payload;
            const item = state.data.items.find((item) => item.id === itemId);
            const itemIndex = state.cartItems.findIndex(({ id }) => id === itemId);
            const cartItem = state.cartItems[itemIndex];

            const newItem = updateCartItem(item, cartItem);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            }

        default:
            return state;
    }
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updateCartItem = (item, cartItem = {}) => {
    const { id = item.id, item_ = item.item, count = 0, total = 0 } = cartItem;

    return {
        id,
        item: item_,
        count: count + 1,
        total: total + item.price
    }
};

export default reducer;