import { useEffect, useState } from 'react';
import { FormControl, Form, FormGroup } from 'react-bootstrap';
import './SearchCharacters.css';

const SearchCharacters = ({ characters, setFilteredCharacters }) => {
    const [ searchName, setSearchName ] = useState("");

    useEffect(() => {
        setFilteredCharacters(characters.filter(c => c.name.toUpperCase().indexOf(searchName.toUpperCase()) > -1));
    }, [searchName]);

    return (
        <Form inline className='searchNameForm flex-grow-1 flex-sm-grow-0 row'>
            <FormControl className="col-10" type='text' placeholder='Search...' value={searchName} onChange={e => setSearchName(e.target.value)} />
            <span className="col-2 material-icons form-control-feedback searchIcon">search</span>
        </Form>
    );
};

export default SearchCharacters;