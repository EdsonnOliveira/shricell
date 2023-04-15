import { IndexProps } from "./models";

const initialState: IndexProps = {
    token: '',
    data: {
        name: '',
        type: 'customer'
    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CUSTOMER_TOKEN':
            return{...state, token: action.payload.token};
            break;
        case 'SET_CUSTOMER_DATA':
            return{...state, token: action.payload.data};
            break;
    }

    return state;
}