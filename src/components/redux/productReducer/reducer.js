import {combineReducers} from "redux";
import { ProductReducer } from './ProducerReducer'

export const reducer = combineReducers({
    ProductData : ProductReducer,

})