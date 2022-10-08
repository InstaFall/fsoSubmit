const PersonForm = (props) => {
    const { newName, newNumber, handleInputName, handleInputNumber, handleSubmit } = props

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