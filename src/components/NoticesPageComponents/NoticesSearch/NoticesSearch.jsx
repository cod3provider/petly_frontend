import { useState } from 'react';
import {
    NoticesSearchInput, NoticesSearchForm, NoticesSearchButton, NoticesSearchIcon,
    NoticesSearchClearIcon, NoticesSearchList, NoticesSearchItem
} from "./NoticesSearch.styled.js"

const NoticesSearch = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
        if (e.target.value === "") {
            onSubmit("");
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
    }

    const reset = () => {
        setQuery('');
        onSubmit("");
    }

    return <NoticesSearchForm onSubmit={handleSubmit}>
        <NoticesSearchInput type="text" name="query" value={query} onChange={handleChange} placeholder='Search' />
        <NoticesSearchList>
            <NoticesSearchItem><NoticesSearchButton type='submit'>
                <NoticesSearchIcon></NoticesSearchIcon>
            </NoticesSearchButton></NoticesSearchItem>
            {!query || <NoticesSearchItem><NoticesSearchButton type='button' onClick={reset}>
                <NoticesSearchClearIcon></NoticesSearchClearIcon>
            </NoticesSearchButton></NoticesSearchItem>}
        </NoticesSearchList>
    </NoticesSearchForm>;
}

export default NoticesSearch;