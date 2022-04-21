const initialState = {
    menuOpen: false,
    offsetTop:[{id: 0, top: 0}],
    clickedId: 0,
}

export default function menuReducer(state = initialState, action){
    switch (action.type) {
        case "OPENMENU":
            return{
                ...state,
                menuOpen: !state.menuOpen
            }
        case "SAVEOFFSETTOP":
            return{
                ...state,
                offsetTop: [...state.offsetTop, action.payload], 
            }
        case "CLICKEDMENU":
            return{
                ...state,
                clickedId: action.payload, 
            }
        default: 
        return state;
    }
}
