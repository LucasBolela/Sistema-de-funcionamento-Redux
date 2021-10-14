import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    newValue: 'Atualizado via Redux!'
};

export const clickReducer = (state = initialState, action) => {

    switch (action.type) {
        //Reducer sera acionado caso o type da Action for 'CLICK_UPDATE_VALUE', se nao mantera o valor atual
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default: 
            return state;
    }
}