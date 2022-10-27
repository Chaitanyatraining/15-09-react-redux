import {createStore} from "redux"
import {reducer} from "../productReducer/reducer"

export const store = createStore(reducer,{});