import { useState } from 'react';
import { NoticesSearchInput,NoticesSearchForm, NoticesSearchButton, NoticesSearchIcon, NoticesSearchClearIcon } from "./NoticesSearch.styled.js"

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

    return <NoticesSearchForm  onSubmit={handleSubmit}>
        <NoticesSearchInput type="text" name="query" value={query} onChange={handleChange} placeholder='Search' />
        {!query || <NoticesSearchButton type='button' onClick={reset}>
            <NoticesSearchClearIcon></NoticesSearchClearIcon>
        </NoticesSearchButton>}
        <NoticesSearchButton type='submit'>
            <NoticesSearchIcon></NoticesSearchIcon>
        </NoticesSearchButton>
    </NoticesSearchForm>;
}

export default NoticesSearch;