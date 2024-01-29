import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    ResponsiveContainer
} from 'recharts';
import { getPriceDate } from '../services/apiServis';
import { chatDataConventor } from '../utlis';

function Body() {
    const [priceData, setPriceData] = useState(null);

    useEffect(() => {
        getPriceDate().then(({ data }) => setPriceData(chatDataConventor(data.ee))
        );
    }, []);

    return (
        <Row>
            <Col>
                <ResponsiveContainer width='100%' height={400}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>

            </Col>
        </Row>
    );
}

export default Body;