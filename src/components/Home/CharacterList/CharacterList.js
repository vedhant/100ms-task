import { useEffect, useState } from 'react';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import CharacterListItem from './CharacterListItem/CharacterListItem';
import './CharacterList.css';
import { Fragment } from 'react';

const NO_OF_CHARS_IN_ONE_PAGE = 10;

const CharacterList = ({ characters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageCharacters, setCurrentPageCharacters] = useState([]);
    
    let totalPageCount = Math.ceil(characters.length / NO_OF_CHARS_IN_ONE_PAGE);
    let paginationItems = [];
    for(let i = 1; i <= totalPageCount; ++i) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={e => setCurrentPage(i)}>{i}</Pagination.Item>
        );
    }

    useEffect(() => {
        let startIndex = (currentPage - 1) * NO_OF_CHARS_IN_ONE_PAGE;
        setCurrentPageCharacters([]);
        let currentPageCharactersTemp = []
        for(let i = 0; i < NO_OF_CHARS_IN_ONE_PAGE && (startIndex + i) < characters.length; ++i) {
            currentPageCharactersTemp.push(characters[startIndex + i]);
        }
        setCurrentPageCharacters(currentPageCharactersTemp);
    }, [currentPage, characters]);

    useEffect(() => {
        setCurrentPage(1);
    }, [characters]);

    const PaginationJSX = () => {
        return (
            <Container className="paginationContainer">
                <Pagination>
                    <Pagination.First disabled={currentPage === 1} onClick={e => setCurrentPage(1)} />
                    <Pagination.Prev disabled={currentPage === 1} onClick={e => setCurrentPage(currentPage - 1)} />
                    { paginationItems }
                    <Pagination.Next disabled={currentPage === totalPageCount} onClick={e => setCurrentPage(currentPage + 1)} />
                    <Pagination.Last disabled={currentPage === totalPageCount} onClick={e => setCurrentPage(totalPageCount)} />
                </Pagination>
            </Container>
        );
    }

    return characters.length ? (
        <Container fluid>
            {PaginationJSX()}
            <Row>
                {currentPageCharacters.map(character => {
                    return (
                        <Col xs={12} md={3} key={character.char_id}>
                            <CharacterListItem character={character} />
                        </Col>
                    )
                })}
            </Row>
            {PaginationJSX()}
        </Container>
    ) : (
        <Fragment></Fragment>
    );
}
 
export default CharacterList;
