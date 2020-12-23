import { Fragment } from 'react';
import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import CharacterList from "./CharacterList/CharacterList"
import NavBar from '../NavBar/NavBar';
import SearchCharacters from './SearchCharacter/SearchCharacters';

const Home = () => {
    const {characters, fetchAllCharacters} = useContext(CharacterContext);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        fetchAllCharacters();
    }, []);

    useEffect(() => {
        setFilteredCharacters(characters);
    }, [characters]);

    return (
        <Fragment>
            <NavBar characters= {characters} setFilteredCharacters={setFilteredCharacters} />
            <CharacterList characters={filteredCharacters} />
        </Fragment>
    );
};

export default Home;