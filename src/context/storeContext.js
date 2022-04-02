import { createContext } from "react";

//describe the data / functions
//that will be shared between components
const store = createContext({
    cart: [],
    user:[],

    addProdToCart: () => {},
    removeProdFromCaret: () => {},

});

export default store;