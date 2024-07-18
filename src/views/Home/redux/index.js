const initialState = {
    seeHistory: false,
    historyList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return {
                ...state,
                seeHistory: action.payload.seeHistory,
                historyList: action.payload.historyList
            }
        default:
            return state
    }
}