import axios from "axios"

const Person = (props) => {
    const {data, handleDelete} = props
    return (
        <li>{data.name} {data.number} <button onClick={handleDelete}>delete</button></li>
    )
}

const Persons = (props) => {
    const { peopleToDisplay, setPersons, persons } = props

    const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/persons/${id}`)
            .then(response => {
                console.log(response)
                const deletedPersons = persons.filter((el) => el.id !== id)
                setPersons(deletedPersons)
            })
    }

    return (
        <ul>
            {peopleToDisplay.map(el =>
                <Person key={el.id} data={el} handleDelete={() => handleDelete(el.id)}
                />)}
        </ul>
    )

}
export default Persons