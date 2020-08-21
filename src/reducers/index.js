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
    cartItems: [],
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
        case 'ITEM_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const item = state.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        case 'ITEM_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        default:
            return state;
    }
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

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

const updateCartItem = (item_, cartItem = {}, quantity) => {
    const {
        id = item_.id,
            vendor = item_.vendor,
            item = item_.item,
            price = item_.price,
            count = 0,
            total = 0
    } = cartItem;

    return {
        id,
        vendor,
        item,
        price,
        count: count + quantity,
        total: total + quantity * price
    }
};

const updateOrder = (state, itemId, quantity) => {
    const { cartItems, data } = state;


    let item; //если товара нет в отобранных группах смотрим в корзине (он там точно должен быть)
    if (data.items.find((item) => item.id === itemId)) {
        item = data.items.find((item) => item.id === itemId);
    } else {
        item = cartItems.find((item) => item.id === itemId);
    }

    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    const cartItem = cartItems[itemIndex];
    //const cartItemPrice = cartItems.price;

    const newItem = updateCartItem(item, cartItem, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

export default reducer;