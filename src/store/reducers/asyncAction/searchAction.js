import axios from "axios"


export const getSearchCity = (city) => {
    return async (dispatch) => {
        dispatch(addCountryPending)
        try {
            console.log(city, "dddd");
            const { data } = await axios('https://restcountries.com/v3.1/name/' + city)
            console.log(data, "city");
            dispatch(addCountrySuccess(data))
        } catch (error) {
            dispatch(addCountryError(error))
        }
    }
}

const addCountryPending = () => {
    return {
        type: "ADD_SEARCH_PENDING"
    };
}
const addCountrySuccess = (data) => {
    return {
        type: 'ADD_SEARCH_SUCCESS',
        payload: data
    }
}

const addCountryError = (error) => ({
    type: 'ADD_SEARCH_ERROR',
    payload: error
})