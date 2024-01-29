import Offcanvas from 'react-bootstrap/Offcanvas';
import DateForm from './DateForm';

function SideBar({ show, handleClose }) {
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Date</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <DateForm />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default SideBar;