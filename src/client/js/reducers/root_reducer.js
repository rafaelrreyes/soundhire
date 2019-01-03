import { combineReducers } from "redux";
import MusiciansReducer from "./reducer_musicians";


// must add any container views here in case they need to be binded to application state (or some data in the root reducer)
const rootReducer = combineReducers({
    musicians: MusiciansReducer
});

export default rootReducer;