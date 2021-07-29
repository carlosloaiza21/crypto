import { LOGIN } from "../actions/user";
const initialData={
    user:[]
}

const userReducer=(state=initialData,action)=>{
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user:[...state.user,action.payload]
            }
        default:
            return state;
    }
}

export default userReducer;
