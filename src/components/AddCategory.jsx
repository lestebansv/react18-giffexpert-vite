import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    const onInputChange = ({ target }) => {
        setInputValue(target?.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                id='inputCategory'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
