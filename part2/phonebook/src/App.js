import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

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

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const peopleToDisplay = (newFilter !== '') ? persons.filter((el) => (el.name.toLowerCase().includes(newFilter.toLowerCase()))) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} newFilter={newFilter} />

      <h2>Add new entry</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleInputName={handleInputName} handleInputNumber={handleInputNumber}
        handleSubmit={handleSubmit} />

      <h2>Numbers</h2>
      <Persons peopleToDisplay={peopleToDisplay} />
    </div>
  )
}

export default App