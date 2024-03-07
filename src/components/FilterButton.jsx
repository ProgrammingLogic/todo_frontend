function FilterButton(props) {
    let pressed = props.filter === props.name;

    return (
        <>
            <button type="button" className="btn toggle-btn" aria-pressed={pressed}>
                <span className="visually-hidden">Show </span>
                <span>{props.name}</span>
                <span className="visually-hidden"> Tasks</span>
            </button>
        </>
    )
}


export default FilterButton;