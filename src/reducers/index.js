const initialState = {
    data: {
        items: (localStorage['goodMarket.data.items']) ? JSON.parse(localStorage['goodMarket.data.items']) : [],
        main_groups: (localStorage['goodMarket.data.main_groups']) ? JSON.parse(localStorage['goodMarket.data.main_groups']) : [],
        sub_groups: (localStorage['data.sub_groups']) ? JSON.parse(localStorage['data.sub_groups']) : [],
    },

    item: localStorage['goodMarket.item'] || {},
    loading: localStorage['goodMarket.loading'] || true,
    error: localStorage['goodMarket.error'] || null,
    pageSize: localStorage['goodMarket.pageSize'] || 0,
    cartItems: (localStorage['goodMarket.cartItems']) ? JSON.parse(localStorage['goodMarket.cartItems']) : [],
    orderTotal: Number.parseInt(localStorage['goodMarket.orderTotal']) || 0,
    orderCount: Number.parseInt(localStorage['goodMarket.orderCount']) || 0,
    deliver: Number.parseInt(localStorage['goodMarket.deliver']) || 0,
};


// Запись данных сайта(корзины) в куки
const localStoregSet = (cooks) => {
    //localStorage.removeItem('goodMarket.orderCount');
    localStorage['goodMarket.orderTotal'] = Number.parseInt(cooks.orderTotal);
    localStorage['goodMarket.cartItems'] = JSON.stringify(cooks.cartItems);
    localStorage['goodMarket.item'] = JSON.stringify(cooks.item);
    localStorage['goodMarket.loading'] = cooks.loading;
    localStorage['goodMarket.error'] = cooks.error;
    localStorage['goodMarket.orderCount'] = Number.parseInt(cooks.orderCount);
    localStorage['goodMarket.pageSize'] = cooks.pageSize;
    localStorage['goodMarket.deliver'] = Number.parseInt(cooks.deliver);

    localStorage['goodMarket.data.items'] = JSON.stringify(cooks.data.items);
    localStorage['goodMarket.data.main_groups'] = JSON.stringify(cooks.data.main_groups);
    localStorage['data.sub_groups'] = JSON.stringify(cooks.data.sub_groups);

    console.log(localStorage.getItem('goodMarket.orderCount'));

}

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

        case 'ITEM_CLEAR_CART': //отчищаем всю корзину
            console.log('CLEAR to cart');
            return {
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
                orderTotal: 0,
                orderCount: 0,
                deliver: 0,
            }

        case 'ADD_DELIVER':

            return {
                ...state,
                console: null,
                loading: false,
                deliver: action.payload
            }

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
            total = 0,
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

    const newItem = updateCartItem(item, cartItem, quantity);

    //Высчитываем ИТОГО сумму    
    const total = (newItem.price * quantity) + state.orderTotal;
    //Итого колличества товара


    const newOrder = {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: total,
        orderCount: state.orderCount + quantity
    };

    localStoregSet(newOrder); //записываем все данные  в куки


    return newOrder;
}

export default reducer;