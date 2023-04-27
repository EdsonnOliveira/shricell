import { IndexProps } from "./models";

const initialState: IndexProps = {
    data: {
        customerId: 0,
        companyName: '',
        phone: '',
        email: '',
        website: '',
        companyAddress: '',
        city: '',
        state: '',
        zipCode: '',
        stateCorporation: '',
        businessIdentify: '',
        federalTaxId: '',
        acquisitionMethod: '',
        photoId: '',
        taxExemptCertificate: '',
        status: '',
    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CUSTOMER_DATA':
            return{...state, data: action.payload.data};
            break;
    }

    return state;
}