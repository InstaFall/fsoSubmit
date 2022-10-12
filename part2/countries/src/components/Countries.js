import axios from "axios"
import { useEffect, useState } from "react"

const CountryList = (props) => {
    const { data, showOnClick } = props
    return (
        <li>
            {data.name.common} <button className={data.name.common} onClick={showOnClick}>show</button>
        </li>
    )
}

const Country = (props) => {
    const { data, goBackOnClick, showFlag, api_key } = props
    const [weatherData, setWeatherData] = useState({})

    const languages = []
    for (const prop in data.languages) {
        languages.push(data.languages[prop])
    }

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.capital},${data.ccn3}&appid=${api_key}&units=metric`)
            .then((response) => {
                console.log(response)
                setWeatherData(response.data)
            })
    }, [])

    return Object.keys(weatherData).length > 0 ?
        <>
            <h2>{data.name.common}</h2>
            <ul>
                <li>Capital: {data.capital}</li>
                <li>Area: {data.area}</li>
            </ul>
            <h3>Languages</h3>
            <ul>
                {languages.map((el, i) =>
                    <li key={i}>{el}</li>)}
            </ul>
            <img src={data.flags.svg} height="90px" width="150px" />
            <div>
                <button className={data.name.common} onClick={goBackOnClick} showflag={showFlag.toString()}>go back</button>
            </div>
            <h3>Current Weather in {data.capital}</h3>
            <div>
                <p>Temperature: {weatherData.main.temp} °C</p>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                <p><b>{weatherData.weather[0].main} - </b> {weatherData.weather[0].description}</p>
                <p>Wind: {weatherData.wind.speed} m/s</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
            </div>
        </>
        :
        <>
            <h2>{data.name.common}</h2>
            <ul>
                <li>Capital: {data.capital}</li>
                <li>Area: {data.area}</li>
            </ul>
            <h3>Languages</h3>
            <ul>
                {languages.map((el, i) =>
                    <li key={i}>{el}</li>)}
            </ul>
            <img src={data.flags.svg} height="90px" width="150px" />
            <div>
                <button className={data.name.common} onClick={goBackOnClick} showflag={showFlag.toString()}>go back</button>
            </div>
            <h3>Weather in {data.capital}</h3>
            <div><i>Getting weather info...</i></div>
        </>
}

const Countries = (props) => {
    const { countries, filter, setFilter, api_key } = props
    let countriesToDisplay = countries.filter((el) => el.name.common.toLowerCase().includes(filter.toLowerCase()))

    // A flag if user clicked show button
    let showFlag = false
    const userInput = document.getElementById("searchFilter")

    const showOnClick = (event) => {
        const newCountry = []
        newCountry.push(countries.find((e) => e.name.common.toLowerCase() == event.target.getAttribute("class").toLowerCase()))
        setFilter(newCountry[0].name.common)
    }

    const goBackOnClick = (event) => {
        userInput.focus()
        if (event.target.getAttribute("showflag")) setFilter(userInput.value.slice(0, -1))
        else setFilter(userInput.value)
    }

    if (countriesToDisplay.length > 10) return <p>Too many matches, specify filter</p>

    else if (countriesToDisplay.length == 1) {
        if (filter == countriesToDisplay[0].name.common) showFlag = true
        return (
            <Country api_key={api_key} data={countriesToDisplay[0]} goBackOnClick={goBackOnClick} showFlag={showFlag} />
        )
    }
    else return (
        <ul>
            {countriesToDisplay.map((el, index) =>
                <CountryList key={index} data={el} showOnClick={showOnClick} />
            )}
        </ul>)
}

export default Countries