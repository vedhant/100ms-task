import { createContext, useState } from 'react';
import axios from 'axios';

export const CharacterContext = createContext();

const CharacterContextProvider = (props) => {
   const [characters, setCharacters] = useState([]);
   const [allQuotes, setAllQuotes] = useState([]);
   const fetchAllCharacters = () => {
        axios.get('https://www.breakingbadapi.com/api/characters?category=Breaking+Bad')
            .then(res => {
                res.data = res.data.sort((a, b) => a.char_id < b.char_id ? -1 : 1);
                setCharacters(res.data);
            });
   };

   const fetchCharacter = (char_id) => {
       let character = characters.find(c => c.char_id == char_id);
       if(character === undefined) {
           axios.get('https://www.breakingbadapi.com/api/characters/' + char_id)
                .then(res => {
                    setCharacters([...characters, res.data[0]]);
                });
       }
   };

   const fetchQuotesofCharacter = (char_id) => {
       let quotes = allQuotes.find(q => q.char_id == char_id);
       if(quotes === undefined) {
           axios.get('https://www.breakingbadapi.com/api/quotes/' + char_id)
                .then(res => {
                    setAllQuotes([...allQuotes, {
                        char_id: char_id,
                        quotes: res.data
                    }]);
                });
       }
   }

   return (
       <CharacterContext.Provider value={{characters, allQuotes, fetchAllCharacters, fetchCharacter, fetchQuotesofCharacter}}>
           { props.children }
       </CharacterContext.Provider>
   );
};

export default CharacterContextProvider;