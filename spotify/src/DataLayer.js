// import { createContext, useReducer } from "react";



// export const DataLayerScore = createContext();


// export const DataLayer = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState)


//     // Actions to be performed

//     // SET_USER

//     function setUserName(user){
//         dispatch({
//             type: 'SET_USER',
//             user:user,
//         })
//     }

//     // SET_TOKEN
//     function setUserToken(token) {
//         dispatch({
//             type: 'SET_TOKEN',
//             token:token,
//         })
//     }

//     //  SET_PLAYLIST
//     function setUserPlayLists(playLists) {
//         dispatch({
//             type: "SET_USER_PLAYLIST",
//             playList: playLists
//         })
//     }



//     return (
//         <DataLayerScore.Provider value={{
//             data:state.playList,
//             setUserName,
//             setUserToken,
//             setUserPlayLists,
//         }}>
//             {children}
//         </DataLayerScore.Provider>
//     )
// }



import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer,initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

