import axios from "axios"


export const getCountries = () => {
    return async (dispatch) => {
        dispatch(addCountryPending)
        try {
            const { data } = await axios('https://restcountries.com/v3.1/all')
            dispatch(addCountrySuccess(data))
        } catch (error) {
            dispatch(addCountryError(error))
        }
    }
}

const addCountryPending = () => {
    return {
        type: "ADD_COUNTRY_PENDING"
    };
}
const addCountrySuccess = (data) => {
    return {
        type: 'ADD_COUNTRY_SUCCESS',
        payload: data
    }
}

const addCountryError = (error) => ({
    type: 'ADD_COUNTRY_ERROR',
    payload: error
})