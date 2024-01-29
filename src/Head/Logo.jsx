import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function Logo({ setShowSideBar }) {
    return (
        <>
            <Col> Logo
                <Button
                    className='mx-2'
                    variant='primary'
                    onClick={() => setShowSideBar(true)}
                > Search </Button>
            </Col>
        </>
    );
}

export default Logo;