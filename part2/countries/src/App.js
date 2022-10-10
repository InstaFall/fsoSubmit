import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [state, setState] = useState(0)
  const [countries, setCountries] = useState([])

  useEffect(()=> {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      console.log(response)
      setCountries(response.data)
    })
    .catch(err => console.log(err))

  },[])

  return(
    <div>
      
    </div>
  )
}
export default App