export const addToBasket = (data) =>{
    return{
        type:'ADD_TO_BASKET',
        data
    }
}
export const removeFromBasket = (id) =>{
    return{
        type:'REMOVE_FROM_BASKET',
        id
    }
}