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
    Dot,
    ResponsiveContainer
} from 'recharts';
import { getPriceDate } from '../services/apiServis';
import { chatDataConventor } from '../utlis';
import { currentTimeStamp } from '../utlis/dates';

function Body({ from, until }) {
    const [priceData, setPriceData] = useState(null);

    const renderDot = (line) => {
        const {
            payload: { timestamp },
        } = line;

        return timestamp === currentTimeStamp() ? (
            <Dot {...line}>
                <div></div>
            </Dot>
        ) : null;
    };

    useEffect(() => {
        getPriceDate(from, until).then(({ data }) =>
            setPriceData(chatDataConventor(data.ee))
        );
    }, [from, until]);

    return (
        <Row>
            <Col>
                <ResponsiveContainer width='100%' height={400}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" interval={1} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="sterAfter"
                            dataKey="price"
                            stroke="#8884d8"
                            dot={renderDot}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </Col>
        </Row>
    );
}

export default Body;