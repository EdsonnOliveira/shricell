import { IndexProps } from "./models";

const initialState: IndexProps = {
    data: {
        id: '',
        name: ''
    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CUSTOMER':
            return{...state, data: action.payload.data};
            break;
    }

    return state;
}