export const initialState = {
    drawerConfirm: {
        isOpen: false,
    },
    infoOrder: {
        price: 0,
        desc: ''
    }
}

export interface State {
    drawerConfirm: {
        isOpen: boolean,
    },
    infoOrder: {
        price: number,
        desc: string
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
        case 'update::info::order': {
            return {
                ...state,
                infoOrder: {
                    price: payload.price,
                    desc: payload.desc,
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;