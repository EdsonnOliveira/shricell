import { IndexProps } from "./models";

const initialState: IndexProps = {
    data: {
        saleId: '',
        customerId: '',
        companyName: '',
        saleValue: '',
        dateTimeInsert: '',
        hash: '',
        saleCost: '',
        paymentReceipt: '',
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SALE_DATA':
            return{...state, data: action.payload.data};
            break;
    }

    return state;
}