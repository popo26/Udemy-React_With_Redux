import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const [title, setTItle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTItle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTItle('');
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>TItle</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    );

}

export default BookCreate;