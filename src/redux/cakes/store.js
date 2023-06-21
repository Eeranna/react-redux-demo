
import {createStore} from 'redux';
import cakeReducer from './cakeReducer';

/*Store component*/
const store = createStore(cakeReducer) 

export default store