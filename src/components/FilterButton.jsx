function FilterButton() {
    return (
        <>
            <div className="filters btn-group stack-exception">
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>All</span>
                    <span className="visually-hidden"> Tasks</span>
                </button>

                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> Tasks</span>
                </button>

                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> Tasks</span>
                </button>
            </div>
        </>
    )
}


export default FilterButton;