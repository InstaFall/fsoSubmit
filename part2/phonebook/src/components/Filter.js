const Filter = (props) => {

  const { handleFilter, newFilter } = props

  return (
    <div>
      filter <input type="text" value={newFilter} onChange={handleFilter} />
    </div>
  )
}

export default Filter