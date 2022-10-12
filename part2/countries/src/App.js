import { React, useState, useEffect, createRef } from 'react'
import Search from './components/Search'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  //Fetch countries with useEffect
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log(response)
        setCountries(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  // Wait for fetch
  if (countries.length > 0)
    return (
      <div>
        <Search countries={countries} setFilter={setFilter} />
        <Countries filter={filter} setFilter={setFilter} countries={countries} />
      </div>
    )

  return (
    <div>
      <p>Fetching countries...</p>
    </div>
  )
}

export default App