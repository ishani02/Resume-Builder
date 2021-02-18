// import { initialState } from "./initialState";

// export function myReducer(state = initialState , action ){
//     if(action.type == "UPDATE_CONTACT"){
//         return {
//             ...state ,
//             contactDetails : {...action.contactDetails}
//         }
//     }
//     else if(action.type == "UPDATE_EDUCATION"){
//         return {
//             ...state , 
//             educationDetails : {...action.educationDetails}
//         }
//     }
//     else if(action.type == "CHANGE_SKIN"){
//         return{
//             ...state , 
//             document : {...state.document , skinCode : action.skinCode}
//         }
//     }
//     else if(action.type == "LOGOUT"){
//                return{
//                    ...state , 
//                    auth : {isAuth : false , user : null}
//                }
//            }else if(action.type=="LOGIN"){
//                return {
//                    ...state ,
//                    auth : { isAuth:true , user: action.userDetails}
//                }
//            }
//      return state;
//  };


// import { firebaseReducer } from "react-redux-firebase";
// import { firestoreReducer } from "redux-firestore";


const { combineReducers } = require("redux");
const { authReducer } = require("./authReducer");
const { contactReducer } = require("./contactReducer");
const { documentReducer } = require("./documentReducer");
const { educationReducer } = require("./educationReducer");


export const myReducer = combineReducers({
    auth : authReducer,
    contactDetails : contactReducer ,
    educationDetails : educationReducer ,
    document : documentReducer,
    // firebase : firebaseReducer,
    // firestore : firestoreReducer
})