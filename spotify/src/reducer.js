export const initialState = {
    user: null,
    playList:[],
    playing: false,
    item: null,
    token: "",
    discover_weekly:[],
}

function reducer(state, action){
    console.log(action)

    // Action-> type, [payload]
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playList:action.playList,
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;