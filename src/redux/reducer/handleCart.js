const Cart = [];

const handleCart = (state = Cart, action) => {
    const Product = action.payload;
    console.log(Product);

    switch (action.type) {
        case "ADDITEM":


            const exist = state.find((x) => x.id === Product.id);
            if (exist) {
                console.log(exist);
                console.log(Cart);
                console.log(state); 
                // increce the quantity
                return state.map((x) => x.id === Product.id ? { ...x, qty: x.qty + 1 } : x);

            } else {
                const Product = action.payload;
               console.log(Product);
                return [
                    ...state,
                    {
                        ...Product,
                        qty: 1,
                    }
                ]

            }

        case "DELETEM":


            const exist1 = state.find((x) => x.id === Product.id);
            if (exist1.qty === 1) {

                return state.filter((x) => x.id === exist1.id)

            } else {
                return state.map((x) => x.id === Product.id ? { ...x, qty: x.qty - 1 } : x);
            };

        default:
            return state;

    }
}

export default handleCart;



