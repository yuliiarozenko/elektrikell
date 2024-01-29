import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function Logo({ handleOpenSideBar }) {
    return (
        <>
            <Col>Logo</Col>
            <Col>
                <Button
                    variant='primary'
                    onClick={handleOpenSideBar}
                > Search </Button>
            </Col>
        </>
    );
}

export default Logo;