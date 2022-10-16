const Person = (props) => {
    const {data, handleDelete} = props
    return (
        <li>{data.name} {data.number} <button onClick={handleDelete}>delete</button></li>
    )
}

const Persons = (props) => {
    const { peopleToDisplay, handleDelete } = props

    return (
        <ul>
            {peopleToDisplay.map(el =>
                <Person key={el.id} data={el} handleDelete={() => handleDelete(el.id)}
                />)}
        </ul>
    )

}
export default Persons