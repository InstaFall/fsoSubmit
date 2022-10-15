import React from "react"

const PersonForm = (props, ref) => {
    const { newName, newNumber, handleInputName, handleInputNumber, handleSubmit } = props 

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input ref={ref} type="text" name="name" value={newName} onChange={handleInputName} />
            </div>
            <div>
                number: <input type="tel" value={newNumber} onChange={handleInputNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default React.forwardRef(PersonForm)