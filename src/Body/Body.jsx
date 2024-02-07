import { useEffect, useState, useMemo, useCallback } from 'react';
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
    ResponsiveContainer,
    ReferenceArea,
    ReferenceLine
} from 'recharts';
import { getPriceDate } from '../services/apiServis';
import { chatDataConventor } from '../utlis';
import { currentTimeStamp } from '../utlis/dates';
import { getLowPriceInterval } from '../utlis/buildIntervals';
import { getAveragePrice } from '../utlis/maths';
import lodash from 'lodash';
import { ERROR_MESSAGE } from './constants';


function Body({ from, until, activeHour, setErrorMessage, setBestUntil }) {
    const [priceData, setPriceData] = useState([]);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);

    const averagePrice = useMemo(() => {
        return getAveragePrice(priceData);
    }, [priceData]);

    const renderDot = useCallback((line) => {
        const {
            payload: { timestamp },
        } = line;

        return timestamp === currentTimeStamp() ? (
            <Dot {...line}>
                <div></div>
            </Dot>
        ) : null;
    }, []);

    useEffect(() => {
        getPriceDate(from, until)
            .then(({ data, success }) => {
                if (!success) throw new Error();
                
                const priceData = chatDataConventor(data.ee);                

                setPriceData(priceData);

            })
            .catch(() => setErrorMessage(ERROR_MESSAGE));
    }, [from, until, setErrorMessage]);

    useEffect(() => {
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

        if (lowPriceIntervals.length) {
            setX1(lowPriceIntervals[0].position);
            setX2(lodash.last(lowPriceIntervals).position);
            setBestUntil(lowPriceIntervals[0].timestamp);
        }
    }, [priceData, activeHour, setBestUntil]);

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
                        <ReferenceArea x1={x1} x2={x2} stroke='red' strokeOpacity={0.3} />
                        <ReferenceLine
                            y={averagePrice}
                            label="Average"
                            stroke="green"
                            strokeDasharray="3 3"
                        />
                    </LineChart>
                </ResponsiveContainer>

            </Col>
        </Row>
    );
}

export default Body;