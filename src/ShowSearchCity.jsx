import React from 'react'
import { useSelector } from 'react-redux'

const ShowSearchCity = () => {
  const { searchData,status } = useSelector(state => state.search)
if (searchData===null) {
  return 
}
    if (status==="pending"||status==="error") {
        return <h3>No found</h3>
    }
  return (
    <div>
          {searchData.map(el => (
        <div className="cart">
          <img src={el.flags.png} alt="" />
          <h4>{el.name.common}</h4>
          <p>population: {el.population}</p>
        </div>
      )
      )}
      </div>
  )
}

export default ShowSearchCity