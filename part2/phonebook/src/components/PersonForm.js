const PersonForm = (props) => {
    const { newName, newNumber, setNewName, setNewNumber, persons, setPersons } = props

    const handleInputName = (event) => {
        setNewName(event.target.value)
    }

    const handleInputNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (persons.some(e => e.name.toLowerCase() === newName.toLowerCase())) {
            alert(`${newName} is already in the phonebook!`)
            setNewName('')
            setNewNumber('')
            document.querySelector('input[name="name"]').focus()
        } else {
            const newPerson = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }
            setNewName('')
            setNewNumber('')
            setPersons(persons.concat(newPerson))
        }
    }

    return (
        <form>
            <div>
                name: <input type="text" name="name" value={newName} onChange={handleInputName} />
            </div>
            <div>
                number: <input type="tel" value={newNumber} onChange={handleInputNumber} />
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>add</button>
            </div>
        </form>
    )
}

export default PersonForm