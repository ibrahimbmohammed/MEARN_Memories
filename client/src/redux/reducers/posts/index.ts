
const postReducer = (state = initialState, actions: any) => {

    switch (actions.type) {
        case "FETCH_ALL":
            return actions.payload;

        case "ADD_POST":
            return [...state, actions.payload]

            default: // need this for default case
            return state 
    }


}

const initialState: any[] = []

export default postReducer;