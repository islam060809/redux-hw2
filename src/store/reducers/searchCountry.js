const searchState = {
    searchData: null,
    status: "",
    error: ""
}

const searchReducer = (state = searchState, { payload, type }) => {
    switch (type) {
        case "ADD_SEARCH_PENDING":
            return { ...state, status: "pending" }
        case "ADD_SEARCH_SUCCESS":
            return { ...state, status: "success", searchData: payload }
        case "ADD_SEARCH_ERROR":
            return { ...state, status: "error", error: payload }
        default:
            return state;
    }
}

export default searchReducer