import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from './constants';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import { getLatestPrice } from '../services/apiServis';


function Info({ activePrice, setActivePrice }) {
    const [currentPrice, setCurrentPrice] = useState(null);
    


    useEffect(() => {
        const fetchLatestPrice = async () => {
            try {
                const latestPriceResponse = await getLatestPrice('EE');
                const latestPrice = latestPriceResponse.price;
                setCurrentPrice(latestPrice);
            } catch (error) {
                console.error('Error fetching latest price:', error);
            }
        };
        fetchLatestPrice();
    }, []);

    const handlePriceChange = (id) => { setActivePrice(id) 
    };

    return (
        <>
            <Col>
                <div>The current price of electricity is</div>
                <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
            </Col>
            <Col>
                <ButtonGroup>
                    {PRICE_BUTTONS.map(({ name, id }) => (
                        <Button
                            key={id}
                            active={activePrice === id}
                            onClick={() => handlePriceChange(id)}
                            variant="secondary"
                        >
                            {name}
                        </Button>
                    ))}
                </ButtonGroup>
            </Col>
            <Col className='text-end'>
                {currentPrice ? (
                    <>
                        <h2>{currentPrice}</h2>
                        <div>cent / kilowatt-hour</div>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </Col>
        </>
    );
}

export default Info;