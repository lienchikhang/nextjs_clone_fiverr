export const initialState = {
    drawerConfirm: {
        isOpen: false,
    },
    infoOrder: {
        price: 0,
        desc: '',
        id: 0,
        quantity: 1,
        image: '',
        customer: '',
        paymentType: '',
    }
}

export interface State {
    drawerConfirm: {
        isOpen: boolean,
    },
    infoOrder: {
        price: number,
        desc: string,
        id: number,
        quantity: number,
        image: string,
        customer: string,
        paymentType: string,
    }
}


export interface Action {
    payload?: any
    type: string
}

const reducer = (state = initialState as State, { type, payload }: Action) => {
    switch (type) {
        case 'change::open::confirm': {
            return {
                ...state,
                drawerConfirm: {
                    isOpen: payload,
                }
            }
        }
        case 'set::info::order': {
            return {
                ...state,
                infoOrder: {
                    price: payload.price,
                    desc: payload.desc,
                    id: payload.id,
                    quantity: payload.quantity,
                    image: payload.image,
                }
            }
        }
        case 'update::quantity::order': {
            return {
                ...state,
                infoOrder: {
                    ...state.infoOrder,
                    quantity: payload,
                }
            }
        }
        case 'update::price::order': {
            return {
                ...state,
                infoOrder: {
                    ...state.infoOrder,
                    price: payload.price,
                }
            }
        }
        case 'update::payment::order': {
            return {
                ...state,
                infoOrder: {
                    ...state.infoOrder,
                    paymentType: payload,
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;