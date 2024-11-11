import { configureStore } from '@reduxjs/toolkit';

type State = {
    username: string,
    usericon: string
}

type Action = LogIn | LogOut

export type LogIn = {
    type: 'logIn';
    payload:{
        username:string,
        usericon:string
    };
}
export type LogOut = {
    type: 'logOut';
    
}



const initialState: State = {
    username: 'default',
    usericon: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg',
};

const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'logIn':
            console.log(state)
            const newUserInfo = action.payload
            return {
                ...state,
                 username:newUserInfo.username,
                 usericon:newUserInfo.usericon
            };
        case 'logOut':
            return{
                ...state, username: 'default',
                 usericon:'https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
            }
        default:
            return state;
    };

};

export const store = configureStore({
    reducer: reducer,
})