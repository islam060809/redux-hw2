const coutryState = {
    coutryData: [],
    status: '',
    error: ''
}

const coutryReducer = (state = coutryState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_COUNTRY_PENDING":
            return { ...state, status: "pending" }
        case "ADD_COUNTRY_SUCCESS":
            return { ...state, status: "success", coutryData: payload }
        case "ADD_COUNTRY_ERROR":
            return { ...state, status: "error", error: payload }
        default:
            return state;
    }
}

export default coutryReducer