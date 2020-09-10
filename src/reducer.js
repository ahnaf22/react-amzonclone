// export const initialState = {
//     basket: [],

// };

// get data from localstorage to persist data
export const initialState = () => {
    const localdata = localStorage.getItem('basket');
    let basketdata = [];
    if (localdata) {
        basketdata = JSON.parse(localdata);
    }
    // returns the initial values
    return {
        basket: basketdata,
        user: null,
    }
};


// use selector to get subtotal
export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0));




const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':

            const basket = [...state.basket, action.item];
            localStorage.setItem('basket', JSON.stringify(basket));
            return {
                ...state,
                basket,
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);

            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1); //cuts one item which matches index
            } else {
                console.warn("cant remove item which isnt in  basket");
            }
            localStorage.setItem('basket', JSON.stringify(newBasket));
            return {
                ...state,
                basket: newBasket
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;

    }

};

export default reducer;