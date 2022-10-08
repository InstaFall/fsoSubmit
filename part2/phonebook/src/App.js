import { useState } from 'react'
import Person from './components/Person'
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

  const peopleToDisplay = (newFilter !== '') ? persons.filter((el) => (el.name.toLowerCase().includes(newFilter.toLowerCase()))) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} newFilter={newFilter} />
      <h2>Add new entry</h2>
      <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}
        persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        {peopleToDisplay.map(el => <Person key={el.id} name={el.name} number={el.number} />)}
      </ul>
    </div>
  )
}

export default App