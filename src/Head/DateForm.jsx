import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DateForm() {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>From</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
}

export default DateForm;