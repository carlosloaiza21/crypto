export const LOGIN="LOGIN";

export const loginUser=({userName,userLast,email,phone})=>({
    type: LOGIN,
    payload:{
        userName,
        userLast,
        email,
        phone
    }
});

