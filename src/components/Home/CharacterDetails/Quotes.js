import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CharacterContext } from "../../../contexts/CharacterContext";
import './Quotes.css';

const Quotes = ({ char_id }) => {
    const { allQuotes, fetchQuotesofCharacter } = useContext(CharacterContext);
    const [ quotes, setQuotes ] = useState([]);

    useEffect(() => {
        fetchQuotesofCharacter(char_id);
    }, []);

    useEffect(() => {
        if(!Array.isArray(allQuotes))
            return;
        let quotesFetched = allQuotes.find(q => q.char_id == char_id);
        console.log(quotesFetched);
        if(quotesFetched !== undefined) {
            setQuotes(quotesFetched.quotes);
        }
    }, [allQuotes]);

    return (
        <Container className="QuotesContainer" fluid>
            {
                quotes.map(quote => {
                    return (
                        <blockquote className="charQuote" key={ quote.quote_id }>{ quote.quote }</blockquote>
                    )
                })
            }
        </Container>
    );
};

export default Quotes;