import { useState } from 'react'
import './todoForm.css'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");

    const arrayColors = [
        "#77172E",
        "#692B17",
        "#7C4A03",
        "#264D3B",
        "#256377"
    ]
        

    

    const handleMissingCategory = () => {
        alert("Você esqueceu de selecionar a categoria da tarefa!");
    }

    const handleMissingValue = () => {
        alert("Você esqueceu de digitar o título da tarefa!");
    }

    const handleMissingColor = () => {
        alert("Você esqueceu de selecionar a cor!");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!value) {
            handleMissingValue();
            return;
        }
        if(!category) {
            handleMissingCategory();
            return;
        }
        if(!backgroundColor) {
            handleMissingColor();
            return;
        }
        
        addTodo(value, category, backgroundColor);
        setValue("");
        setCategory("");
        setBackgroundColor("");
    }
    const selectBackgroundColor = (e, color) => {
        e.preventDefault();
        setBackgroundColor(color);
    }
    return (
        <div 
            className='todo-form'
            data-cy="todo-form"
        >
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="" id=""
                    placeholder='Digite o título'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    data-cy="todo-form-input"
                />
                <select
                    name=""
                    id=""
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    data-cy="select-category"
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <div className='colors' data-cy="colors">
                    <p className='colors_text'>Cor: </p>
                    <div className='colors_options'>
                        {
                            arrayColors.map((item, index) => {
                                return  <button data-cy="color" className='color' key={index} style={{backgroundColor: `${item}`}} onClick={(e) => selectBackgroundColor(e, item)}></button>
                            })
                        }
                    </div>
                </div>
                <button data-cy="submit" type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm