import { useState } from 'react';

const NoticesSearch = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        reset();
    }

    const reset = () => {
        setQuery('');
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} placeholder='Search' />
        <button type='button' onClick={reset}></button>
        <button type='submit'></button>
    </form>;
}

export default NoticesSearch;