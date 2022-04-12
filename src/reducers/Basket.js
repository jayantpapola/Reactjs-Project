const initialState = {
    basket: [],
};



const cartFunction =(state=initialState, action) =>
{
    // console.log(action)
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            return{...state,
                basket:[...state.basket,action.data]
            }

        case 'REMOVE_FROM_BASKET':
            return {
                basket: state.basket.filter((item) => item.id !== action.id)
            }

        default :
        return state
    }
}

export default cartFunction; 