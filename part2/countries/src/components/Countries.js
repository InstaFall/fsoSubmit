const CountryList = (props) => {
    const { data } = props
    return (
        <li>
            {data.name.common}
        </li>
    )
}

const Country = (props) => {
    const { data } = props
    console.log(data.languages)
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
        </>
    )
}

const Countries = (props) => {
    const { renderedCountries, countryCount } = props

    if (countryCount < 10 && countryCount != 1) {
        return (
            <ul>
                {renderedCountries.map((el, index) =>
                    <CountryList key={index} data={el} />
                )}
            </ul>)
    }
    else if (countryCount == 1) {
        return (
            <Country data={renderedCountries[0]} />
        )
    }
}

export default Countries