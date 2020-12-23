import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom";
import './CharacterListItem.css'

const CharacterListItem = ({ character }) => {
    return (
        <Link to={'/character/' + character.char_id} className="selectCharacter" style={{ textDecoration: 'none' }} >
            <Card className="characterListItemCard">
                <Card.Img variant="top" src={character.img} />
                <Card.Body>
                    <Card.Title>{ character.name }</Card.Title>
                </Card.Body>
                <ListGroup>
                    <ListGroupItem><span className="char-detail-title">Date of birth : </span>{ character.birthday }</ListGroupItem>
                    <ListGroupItem><span className="char-detail-title">Status : </span>{ character.status }</ListGroupItem>
                    <ListGroupItem><span className="char-detail-title">Occupation : </span>{ character.occupation.join(', ') }</ListGroupItem>
                </ListGroup>
            </Card>
        </Link>
    );
};

export default CharacterListItem;