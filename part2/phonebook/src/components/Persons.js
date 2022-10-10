import axios from "axios"

const Person = (props) => {
    return (
        <li>{props.name} {props.number} <button id={props.id} onClick={props.handleDelete}>delete</button></li>
    )
}

const Persons = (props) => {
    const { peopleToDisplay, setPersons, persons } = props

    const handleDelete = (event) => {
        const id = event.target.getAttribute("id")
        //immutable solution without splice
        const deletedPersons = [...persons.slice(0, id - 1), ...persons.slice(id)]
        setPersons(deletedPersons)
        axios.delete(`http://localhost:3001/persons/${id}`)
            .then(response => console.log(response))
    }

    return (
        <ul>
            {peopleToDisplay.map(el =>
                <Person key={el.id} id={el.id} name={el.name} number={el.number} handleDelete={handleDelete}
                />)}
        </ul>
    )

}
export default Persons