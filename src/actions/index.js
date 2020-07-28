const itemsloaded = (newItems) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newItems
    }
};

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

const fetchMaingroups = (goodStoreService, dispatch) => () => {

    goodStoreService.getMaingroups()
        .then((dataMaingroups) => dispatch(maingroupsLoaded(dataMaingroups)))
        .catch((err) => {
            dispatch(maingroupsError(err));
            console.error('Could not fetch Main Group', err);
        });
};

export {
    itemsloaded,
    fetchMaingroups,
    maingroupsLoaded
};