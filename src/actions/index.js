const itemsloaded = (newItems) =>{
return{
    type:'ITEMS_LOADED',
    payload:newItems
}
};

export {
itemsloaded
};