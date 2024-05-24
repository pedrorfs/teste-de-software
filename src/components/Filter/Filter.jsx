import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter" data-cy="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)} 
                        data-cy="status-select"
                    >
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button data-cy="asc-button" onClick={() => setSort("Asc")}>Asc</button>
                    <button data-cy="desc-button" onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filter