const Search = (props) => {
    const { setFilter, countryCount } = props
    const handleSearch = (event) => {
        setFilter(event.target.value)
    }

    const tooMany = () => {
        return (countryCount > 10) ? true : false
    }

    return tooMany() ?
        <>
            find country <input autoFocus type="text" placeholder="Search for a country" onChange={handleSearch} />
            <p>Too many matches, specify filter</p>
        </>
        :
        <>
            find country <input autoFocus type="text" placeholder="Search for a country" onChange={handleSearch} />
        </>
}

export default Search