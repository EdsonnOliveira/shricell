import { IndexProps } from "./models";

const initialState: IndexProps = {
    data: {
        deviceId: '',
        brandId: '',
        brand: '',
        modelId: '',
        model: '',
        colorId: '',
        color: '',
        storageId: '',
        storage: '',
        quantityStock: '',
        gradeId: '',
        gradeName: '',
        gradeDescription: '',
        salePrice: '',
    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_STOCK_DATA':
            return{...state, data: action.payload.data};
            break;
    }

    return state;
}