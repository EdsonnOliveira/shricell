import { IndexProps } from "./models";

const initialState: IndexProps = {
    data: {
        customerId: 0,
        companyName: '',
        dunsNumber: '',
        phone: '',
        email: '',
        website: '',
        companyAddress: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        stateCorporation: '',
        typeIndustry: '',
        businessIdentify: '',
        federalTaxId: '',
        acquisitionMethod: '',
        photoId: '',
        taxExemptCertificate: '',
        status: '',
    }
};

export default (state = initialState, action: any) => {
    switch(action.type) {
        case 'SET_CUSTOMER_DATA':
            return{...state, data: action.payload.data};
            break;
    }

    return state;
}