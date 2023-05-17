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
        dateSale: '',
        status: ''
    }
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case 'SET_SALE_DATA':
            return{...state, data: action.payload.data};
            break;
    }

    return state;
}