/*const fetchMaingroups = (goodStoreService, dispatch) => () => {

    goodStoreService.getMaingroups()
        .then((dataMaingroups) => dispatch(maingroupsLoaded(dataMaingroups)))
        .catch((err) => {
            dispatch(maingroupsError(err));
            console.error('Could not fetch Main Group', err);
        });
};*/

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

/*========================== CART  OPERATIONS==================*/

export const itemAddedToCart = (itemId) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: itemId
    };
};

export {
    dataLoaded,
    dataRequsted,
    dataError,
    /*=======*/
    itemLoaded,
    itemRequsted,
    itemError,
};