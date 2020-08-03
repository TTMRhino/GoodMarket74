/*const itemsLoaded = (newItems) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newItems
    }
};*/

const maingroupsError = (error) => {
    return {
        type: 'FETCH_MAINGROUPS_FAILURE',
        payload: error
    };
};

const maingroupsLoaded = (newMaingroup) => {
    return {
        type: 'FETCH_MAINGROUPS_SUCCESS',
        payload: newMaingroup
    };
};

const subgroupsLoaded = (newSubgroup) => {
    return {
        type: 'FETCH_SUBGROUPS_SUCCESS',
        payload: newSubgroup
    };
};

const itemsLoaded = (newItem) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItem
    };
};

const itemsRequsted = () => {
    return {
        type: 'ITEM_REQUESTED'
    }
};

const pageSizeLoaded = (newPageSize) => {
    return {
        type: 'FETCH_PAGESIZE_SUCCESS',
        payload: newPageSize
    };
};





const fetchMaingroups = (goodStoreService, dispatch) => () => {

    goodStoreService.getMaingroups()
        .then((dataMaingroups) => dispatch(maingroupsLoaded(dataMaingroups)))
        .catch((err) => {
            dispatch(maingroupsError(err));
            console.error('Could not fetch Main Group', err);
        });
};

export {
    itemsLoaded,
    fetchMaingroups,
    maingroupsLoaded,
    subgroupsLoaded,
    pageSizeLoaded,
    itemsRequsted
};