const dataLoaded = (newData) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: newData
    };
};
const dataRequsted = () => {
    return {
        type: 'DATA_REQUESTED'
    }
};

const dataError = (error) => {
    return {
        type: 'DATA_ERROR',
        payload: error
    }
};

const dataPurchase = (purchase) => {
    return {
        type: 'DATA_PURCHASE',
        payload: purchase
    }
};

// Загрузка одного item`а
const itemLoaded = (newItem) => {
    return {
        type: 'FETCH_ITEM_SUCCESS',
        payload: newItem
    };
};
const itemRequsted = () => {
    return {
        type: 'ITEM_REQUESTED'
    }
};

const itemError = (error) => {
    return {
        type: 'ITEM_ERROR',
        payload: error
    }
};


export const pageSizeLoaded = (newPageSize) => {
    return {
        type: 'FETCH_PAGESIZE_SUCCESS',
        payload: newPageSize
    };
};

/*========Сортировка переключатель===========*/
export const sort = (sort) => {
    return {
        type: 'SWITCH_ITEM_SORT',
        payload: sort
    };
};

/*========================== CART  OPERATIONS==================*/

export const itemAddedToCart = (itemId) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: itemId
    };
};

//=======================Удаление 1 товара==================

export const itemRemovedFromCart = (itemId) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: itemId
    };
};

//=======================Удаление всего товара==================

export const allItemRemoveFromCart = (itemId) => {
    return {
        type: 'ALL_ITEMS_REMOVED_FROM_CART',
        payload: itemId
    };
};


export const deliverAdd = (priceDeliver) => {
    return {
        type: 'ADD_DELIVER',
        payload: priceDeliver
    }
}


export {
    dataLoaded,
    dataRequsted,
    dataError,
    dataPurchase,
    /*=======*/
    itemLoaded,
    itemRequsted,
    itemError,
};