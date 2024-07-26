import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from './Search'
import { getCountries } from './store/reducers/asyncAction/asyncActions'

const Country = () => {
  const { coutryData, status } = useSelector(state => state.country)
  console.log(status);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  console.log(coutryData, 'hhhh');
  if (status === "pending") {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <Search />
      <hr />
      {coutryData.map(el => (
        <div className="cart">
          <img src={el.flags.png} alt="" />
          <h4>{el.name.common}</h4>
        </div>
      )
      )}
    </div>
  )
}

export default Country