import * as actions from '../actions/actionTypes';

const initialState = {
  open: false,
  setOpen: false
};

export default function ToggleDropdown(state = initialState, action) {
    if(action.type  === actions.TOGGLE_DROPDOWN){
        return Object.assign({}, state, {
                open: action.open,
                setOpen: action.setOpen
        });
    }else {
        return state;
    }


}
