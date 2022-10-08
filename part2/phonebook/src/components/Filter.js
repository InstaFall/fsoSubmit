const Filter = (props) => {

  const { setFilter, newFilter } = props

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      filter <input type="text" value={newFilter} onChange={handleFilter} />
    </div>
  )
}

export default Filter