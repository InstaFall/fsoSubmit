const Person = (props) => {
    return (
        <li>{props.name} {props.number}</li>
    )
}

const Persons = (props) => {
    const { peopleToDisplay } = props

    return (
        <ul>
            {peopleToDisplay.map(el =>
                <Person key={el.id} name={el.name} number={el.number}
                />)}
        </ul>
    )

}
export default Persons