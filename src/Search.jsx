import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowSearchCity from './ShowSearchCity'
import { getSearchCity } from './store/reducers/asyncAction/searchAction'

const Search = () => {
    // const [inputValue, setInputValue] = useState("")
    const { searchData } = useSelector(state => state.search)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSearchCity())
    }, [])
    const getCity = (e) => {
        e.preventDefault();
        console.log(e);
        const searchInput = e.target.seachInput.value
        console.log(searchInput);
        if (searchInput === "") {
            ;
        } else {
            // const newTodo = { title: todoInput, id: todoData.at(-1).id + 1 || 1 }
            dispatch(getSearchCity(searchInput))
            
        }
        e.target.seachInput.value = ""
    }
    // console.log(inputValue);
    return (
        <div>
            <form onSubmit={getCity}>
                <input type="text" name='seachInput' />
                {/* <input type="submit" placeholder='search' /> */}
                <button type='submit'>search</button>
            </form>
            <ShowSearchCity />
        </div>
    )
}

export default Search