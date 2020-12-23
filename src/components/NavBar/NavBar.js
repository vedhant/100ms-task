import { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './NavBar.css';
import SearchCharacters from '../Home/SearchCharacter/SearchCharacters';
import Theme from '../Theme/Theme';

const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg" className="d-flex flex-row">
            {
                props.location.pathname.includes('/character/') ? (
                    <span className="material-icons left-icon" onClick={e => props.history.push('/')}>arrow_back</span>
                ) : (<Fragment></Fragment>)
            }
            <Navbar.Brand className="mr-auto">BREAKING BAD</Navbar.Brand>
            <Theme />
            {
                props.hasOwnProperty('characters') ? (
                    <SearchCharacters characters={props.characters} setFilteredCharacters={props.setFilteredCharacters} />
                    ) : (
                        <Fragment></Fragment>
                        )
                    }
        </Navbar>
    );
}
 
export default withRouter(NavBar);
