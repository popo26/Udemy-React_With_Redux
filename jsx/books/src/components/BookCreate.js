import { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTItle] = useState('');

    const handleChange = (event) => {
        setTItle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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