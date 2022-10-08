import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const peopleToDisplay = (newFilter !== '') ? persons.filter((el) => (el.name.toLowerCase().includes(newFilter.toLowerCase()))) : persons

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already in the phonebook!`)
      setNewName('')
      setNewNumber('')
      document.querySelector('input').focus()
    }

    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setNewName('')
      setNewNumber('')
      setPersons(persons.concat(newPerson))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter <input type="text" value={newFilter} onChange={handleFilter} /></div>
      <h2>Add new entry</h2>
      <form>
        <div>
          name: <input type="text" value={newName} onChange={handleInputName} />
        </div>
        <div>
          number: <input type="tel" value={newNumber} onChange={handleInputNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {peopleToDisplay.map((el) => <li key={el.name}>{el.name} {el.number}</li>)}
      </ul>
    </div>
  )
}

export default App