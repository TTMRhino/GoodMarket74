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


const pageSizeLoaded = (newPageSize) => {
    return {
        type: 'FETCH_PAGESIZE_SUCCESS',
        payload: newPageSize
    };
};

export {
    pageSizeLoaded,
    dataLoaded,
    dataRequsted,
    dataError
};