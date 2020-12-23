import { Modal, Button, Form } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import './FilterCharacters.css';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { ThemeContext } from '../../contexts/ThemeContext';

const FilterCharacters = ({ characters, setFilteredCharacters }) => {
    const {isDarkTheme} = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);
    const [occupationsList, setOccupationsList] = useState([]);
    const [occupationsSelected, setOccupationsSelected] = useState([]);
    const [occupationsFiltered, setOccupationsFiltered] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const [statusSelected, setStatusSelected] = useState([]);
    const [statusFiltered, setStatusFiltered] = useState([]);

    useEffect(() => {
        let occupations = new Set();
        for(let i = 0; i < characters.length; ++i) {
            occupations.add(...characters[i].occupation);
        }
        let status = new Set();
        for(let i = 0; i < characters.length; ++i) {
            status.add(characters[i].status);
        }
        setOccupationsList([...occupations]);
        setOccupationsSelected([...occupations]);
        setStatusList([...status]);
        setStatusSelected([...status]);
    }, [characters]);

    useEffect(() => {
        let filteredCharacters = characters.filter(c => {
            let intersection = c.occupation.filter(o => occupationsSelected.includes(o));
            return intersection.length > 0;
        });
        setOccupationsFiltered(filteredCharacters);
    }, [occupationsSelected]);

    useEffect(() => {
        let filteredCharacters = characters.filter(c => {
            return statusSelected.includes(c.status);
        });
        setStatusFiltered(filteredCharacters);
    }, [statusSelected]);
    
    const intersectFilters = () => {
        setFilteredCharacters(occupationsFiltered.filter(c1 => statusFiltered.some(c2 => c2.char_id == c1.char_id)));
    };

    return (
        <>
            <span className="material-icons filterIcon" onClick={e => setShowModal(true)}>filter_alt</span>
            <Modal id="filterModal" show={showModal} onHide={e => setShowModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Apply Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Occupations</Form.Label>
                    <DropdownMultiselect
                        options={occupationsList}
                        name="Occupations"
                        selected={occupationsSelected}
                        buttonClass={isDarkTheme ? 'btn-dark' : 'btn-light'}
                        handleOnChange={selected => setOccupationsSelected(selected)}
                    />
                    <Form.Label>Status</Form.Label>
                    <DropdownMultiselect
                        options={statusList}
                        name="Status"
                        selected={statusSelected}
                        buttonClass={isDarkTheme ? 'btn-dark' : 'btn-light'}
                        handleOnChange={selected => setStatusSelected(selected)}
                    />
                </Modal.Body>
                <Modal.Footer>
                <Button variant={isDarkTheme ? 'outline-dark' : 'outline-light'} onClick={e => setShowModal(false)}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FilterCharacters;
