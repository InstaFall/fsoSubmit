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
  const ref = useRef([])

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

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name.toLowerCase() === newName.toLowerCase())) {
      const id = persons.find((e) => e.name.toLowerCase() === newName.toLowerCase()).id
      if(window.confirm(`${newName} is already in the phonebook. Do you want to update its phone number with ${newNumber}?`)){
          const updatedPerson = {
            name: newName,
            number: newNumber,
            id: id
          }
          netService.update(updatedPerson,id)
          .catch((err) => {console.log(err)})
          // For speed, re-render immediately instead of waiting for the response 
          setPersons(persons.map((el) => el.id !== id ? el : updatedPerson))
          setNewName('')
          setNewNumber('')
          ref.current[0].focus()}
      else {
      setNewNumber('')
      ref.current[1].focus()
      }
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
          ref.current[0].focus()
        })
        .catch((err) => {console.log(err)})
    }
  }

  const handleDelete = (id) => {
    if (window.confirm(`Do you want to delete ${persons.find((el) => el.id === id).name}`)) {
      netService.deleteObject(id)
        .then((response) => {
          const deletedPersons = persons.filter((el) => el.id !== id)
          setPersons(deletedPersons)
          ref.current[0].focus()
          console.log("Delete response: ", response)
        })
    }
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
      <Persons peopleToDisplay={peopleToDisplay} handleDelete={handleDelete} />
    </div>
  )
}

export default App