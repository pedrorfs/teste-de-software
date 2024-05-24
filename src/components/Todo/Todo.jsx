import './todo.css';

const Todo = ({ todo, removeTodo, completeTodo, color }) => {
    return (
        <div 
            className="todo" 
            key={todo.id} 
            style={{textDecoration: todo.isCompleted ? "line-through" : "", backgroundColor: `${color}`}}
            data-cy="todo"
        >
            <div className='todo__content'>
                <p data-cy="todo-content">{todo.text}</p>
                <p 
                    data-cy="todo-category"
                    className="category"
                >{todo.category}</p>
            </div>
            <div>
                <button className='todo__complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='todo__remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo