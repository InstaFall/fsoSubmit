import { useState, useEffect } from 'react'
import Search from './components/Search'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  //const [tooMany, setTooMany] = useState(true)
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  let countryCount = 0


  //Fetch countries with useEffect
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log(response)
        setCountries(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  //Filter the countries  


  if (countries.length > 0) {

    const renderedCountries = (filter !== '') ? countries.filter((el) => el.name.common.toLowerCase().includes(filter.toLowerCase())) : countries
    countryCount = renderedCountries.length

    return (
      <div>
        <Search countryCount={countryCount} setFilter={setFilter} />
        <Countries countryCount={countryCount} renderedCountries={renderedCountries} />
      </div>
    )
  } else {
    return (
      <div>
        <p>Fetching countries...</p>
      </div>
    )
  }
}

export default App