import { combineReducers } from "redux";
import userDataReducer from "../_redux/Post/reducer";
import CommReducer from "../_redux/PostDetails/reducer";
const rootReducer=combineReducers({
    userDataReducer,
    CommReducer
})

export default rootReducer;
