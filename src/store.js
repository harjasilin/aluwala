import { createStore, combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const rootReducer = combineReducers({
    user: authReducer,

});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
    return createStore(persistedReducer);
}

export default configureStore;