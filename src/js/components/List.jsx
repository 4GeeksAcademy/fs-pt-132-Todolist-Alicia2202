import react from "react"; 

const List = ({data, deleteTask}) => {

    return (
        <>
        <ul className="list-group notebook">
            {data.length === 0 ? (
                <li className="list-group-item">No hay tareas, añade</li>
            ): ( data.map((el, i) => (
            <li 
            key={i} className="list-group-item d-flex justify-content-between task-item"> 
            {el} 
            <span className="delete-icon" onClick={() => deleteTask(i)}>
                <i className="fa-regular fa-trash-can"></i>
            </span>

            </li>) 
            ))
                            
            }
        </ul>
        </>
    )
}

export default List;