import { Fragment } from 'react';
import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import CharacterList from "./CharacterList/CharacterList"
import NavBar from '../NavBar/NavBar';
import SearchCharacters from './SearchCharacter/SearchCharacters';

const Home = () => {
    const {characters, fetchAllCharacters} = useContext(CharacterContext);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [searchedCharacters, setSearchedCharacters] = useState([]);
    const [finalCharactersList, setFinalCharactersList] = useState([]);

    useEffect(() => {
        fetchAllCharacters();
    }, []);

    useEffect(() => {
        setSearchedCharacters([...characters]);
        setFilteredCharacters([...characters]);
    }, [characters]);

    useEffect(() => {
        setFinalCharactersList(filteredCharacters.filter(c1 => {
            return searchedCharacters.some(c2 => c2.char_id == c1.char_id);
        }));
    }, [filteredCharacters, searchedCharacters]);

    return (
        <Fragment>
            <NavBar characters= {characters} searchedCharacters={searchedCharacters} setFilteredCharacters={setFilteredCharacters} setSearchedCharacters={setSearchedCharacters} />
            <CharacterList characters={finalCharactersList} />
        </Fragment>
    );
};

export default Home;