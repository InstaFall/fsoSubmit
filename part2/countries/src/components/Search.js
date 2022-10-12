import React from "react"

const Search = (props) => {
    const { setFilter } = props
    const handleSearch = (event) => {
        setFilter(event.target.value)
    }
    return (
        <>
            find country <input autoFocus id="searchFilter" type="text" placeholder="Search for a country" onChange={handleSearch} />
        </>
    )
}

export default Search