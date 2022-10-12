const CountryList = (props) => {
    const { data, showOnClick } = props

    return (
        <li>
            {data.name.common} <button className={data.name.common} onClick={showOnClick}>show</button>
        </li>
    )
}

const Country = (props) => {
    const { data, goBackOnClick, showFlag } = props
    const languages = []
    for (const prop in data.languages) {
        languages.push(data.languages[prop])
    }
    return (
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
        </>
    )
}

const Countries = (props) => {
    const { countries, filter, setFilter } = props
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
            <Country data={countriesToDisplay[0]} goBackOnClick={goBackOnClick} showFlag={showFlag} />
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