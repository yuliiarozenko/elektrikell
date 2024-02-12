import { useState, useEffect } from "react";
import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from './Body';
import Footer from './Footer';
import Head from './Head';
import { DEFAULT_ACTIVE_BUTTON } from './Head/constants';
import LeftSideBar from "./LeftSideBar";
import { getDefaultFrom, getDefaultUntil } from "./utlis/dates";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";

function ElectricPrice() {
  console.log('test')
  const params = useParams();

  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(1);
  const [showSideBar, setShowSideBar] = useState (false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseSideBar = () => setShowSideBar(false);
  const handleOpenSideBar = () => setShowSideBar(true);

  useEffect(() => {
    if(params.hours) setActiveHour(+params.hours);
  }, [params]);
   
  return (
    <Container>
      <Head 
      activePrice={activePrice} 
      setActivePrice={setActivePrice}
      handleOpenSideBar={handleOpenSideBar}
      setErrorMessage={setErrorMessage} 
      />
      <Body 
      activeHour={activeHour} 
      from={from} 
      until={until}
      setErrorMessage={setErrorMessage}
      setBestUntil={setBestUntil}
      setIsLoading = {setIsLoading}
      />
      <Footer 
      activePrice={activePrice}
      activeHour={activeHour} 
      setActiveHour={setActiveHour} 
      bestUntil={bestUntil}
      />
      <LeftSideBar 
      show={showSideBar} 
      handleClose={handleCloseSideBar}
      from={from} 
      until={until}
      setFrom={setFrom}
      setUntil={setUntil}
      />
      <ErrorModal 
      show={!!errorMessage} 
      handleClose={() => setErrorMessage(null)}
      errorMessage={errorMessage}
      />
      {isLoading && <h1>Loading...</h1>}
      </Container>
  );
}

export default ElectricPrice;
