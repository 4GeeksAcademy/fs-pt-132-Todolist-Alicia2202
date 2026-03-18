import react from "react"; 

const List = ({data}) => {

    return (
        <>
        <ul>
            {data.length === 0 ? (
                <li>No hay tareas, añade</li>
            ): ( data.map((el, i) => <li key={i}> {el} </li>) )
                            
            }
        </ul>
        </>
    )
}

export default List;