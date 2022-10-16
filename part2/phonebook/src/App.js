import { useState, useEffect, useRef } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import netService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [notification, setNotification] = useState({message: null, error: false})
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
      const updatedPerson = {
        name: newName,
        number: newNumber,
        id: id
      }
      if (window.confirm(`${newName} is already in the phonebook. Do you want to update its phone number with ${newNumber}?`)) {
        netService.update(updatedPerson, id)
          .then(() => {
            setPersons(persons.map((el) => el.id !== id ? el : updatedPerson))
            setNewName('')
            setNewNumber('')
            setNotification({...notification, message: `${updatedPerson.name}'s number is changed to ${updatedPerson.number}!`})
            setTimeout(() => {
              setNotification({message:null,error:false})
            }, 5000)
            ref.current[0].focus()
          })
          .catch((err) => {
            console.log(err)
            setNotification({message:`Error: Person was removed from the server! ${err}`, error: true})
            setTimeout(() => {
              setNotification({message:null,error:false})
            }, 5000)
            setPersons(persons.filter((el) => el.id !== id))
            setNewName('')
            setNewNumber('')
            ref.current[0].focus()
          })
      }
      // For speed, re-render immediately instead of waiting for the response 
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
          setNotification({...notification, message:`${newPerson.name} is added to the phonebook!`})
          setTimeout(() => {
            setNotification({message:null,error:false})
          }, 4000)
          ref.current[0].focus()
        })
        .catch((err) => { console.log(err) })
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
      <h1>Phonebook</h1>
      <Notification notification={notification}/>
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