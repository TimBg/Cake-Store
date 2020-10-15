import { combineReducers } from 'redux';

import filters from './filters';
import cakes from './cakes';
import cart from './cart';

const rootReducer = combineReducers({
    filters,
    cakes,
    cart,
});

export default rootReducer;
