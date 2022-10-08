import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

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
        {persons.map((el) => <li key={el.name}>{el.name} {el.number}</li>)}
      </ul>
    </div>
  )
}

export default App