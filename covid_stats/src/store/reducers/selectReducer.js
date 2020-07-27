import * as actions from '../actions/actionTypes';


const initialState = {
    selectedCountry: ''
};

export default function selectCountry (state = initialState, action)  {
    switch(action.type){
        case actions.SELECT_COUNTRY:
            return Object.assign({}, state, {
                selectedCountry: action.select
            });

        default: return state
    }
}
