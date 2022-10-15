import { useState, useEffect, useRef } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import netService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const ref = useRef(null)

  useEffect(() => {
      netService.getAll()
      .then((response) => {
        setPersons(response)
      })
      .catch((err) => console.log(err))
  }, [])

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
      //document.querySelector('input[name="name"]').focus() changed to useRef hook
      ref.current.focus()
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
        netService.create(newPerson)
        .then((response) => {
          setNewName('')
          setNewNumber('')
          setPersons(persons.concat(response))
        })
        }
    }
  

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const peopleToDisplay = newFilter !== '' ?
  persons.filter((el) => (el.name.toLowerCase().includes(newFilter.toLowerCase()))) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} newFilter={newFilter} />

      <h2>Add new entry</h2>
      <PersonForm ref={ref} newName={newName} newNumber={newNumber} handleInputName={handleInputName} handleInputNumber={handleInputNumber}
        handleSubmit={handleSubmit} />

      <h2>Numbers</h2>
      <Persons peopleToDisplay={peopleToDisplay} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App