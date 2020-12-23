import { Fragment } from "react";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { CharacterContext } from "../../../contexts/CharacterContext";
import './CharacterDetails.css'
import NavBar from "../../NavBar/NavBar";
import Quotes from "./Quotes";

const CharacterDetails = (props) => {
    const { characters, fetchCharacter } = useContext(CharacterContext);
    const [ character, setCharacter ] = useState({});
    let char_id = props.match.params.char_id;
    
    useEffect(() => {
        fetchCharacter(char_id);
    }, []);
    
    useEffect(() => {
        if(Array.isArray(characters))
            setCharacter(characters.find(character => character.char_id == char_id));
    }, [characters]);


    return character !== undefined && character.hasOwnProperty('char_id') ? (
        <Fragment>
            <NavBar />
            <Container fluid className="charDetailsContainer">
                <Row>
                    <Col xs={12} md={4}>
                        <Image src={character.img} fluid rounded />
                    </Col>
                    <Col className="charDetailsCol">
                        <h1 className="charName">{ character.name }</h1>
                        <p><span className="char-detail-title">Date of birth : </span>{ character.birthday }</p>
                        <p><span className="char-detail-title">Status : </span>{ character.status }</p>
                        <p><span className="char-detail-title">Occupation : </span>{ character.occupation.join(', ') }</p>
                        <p><span className="char-detail-title">Nickname : </span>{ character.nickname }</p>
                        <p><span className="char-detail-title">Portrayed by : </span>{ character.portrayed }</p>
                        <p><span className="char-detail-title">Appeared in seasons : </span>{ character.appearance.join(', ') }</p>

                        <Quotes char_id={char_id} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    ) : (
        <Fragment></Fragment>
    );
};

export default CharacterDetails;