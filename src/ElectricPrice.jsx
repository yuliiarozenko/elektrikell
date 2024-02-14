import { useState, useEffect } from "react";
import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from './Body';
import Footer from './Footer';
import Head from './Head';
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveHour } from "./services/stateService";
import { setErrorMessage } from "./services/stateService";

function ElectricPrice() {
  console.log('test')
  const params = useParams();
  const dispatch = useDispatch();

  const [showSideBar, setShowSideBar] = useState (false);
  const [bestUntil, setBestUntil] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseSideBar = () => setShowSideBar(false);
  const handleOpenSideBar = () => setShowSideBar(true);
  
  const errorMessage = useSelector((state) => state.errorMessage);

  useEffect(() => {
    if(params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);
   
  return (
    <Container>
      <Head 
      handleOpenSideBar={handleOpenSideBar}
      />
      <Body 
      setBestUntil={setBestUntil}
      setIsLoading = {setIsLoading}
      />
      <Footer 
      bestUntil={bestUntil}
      />
      <LeftSideBar 
      show={showSideBar} 
      handleClose={handleCloseSideBar}
      />
      <ErrorModal 
      show={!!errorMessage}
      handleClose={() => dispatch(setErrorMessage(null))}
      />
      {isLoading && <h1>Loading...</h1>}
      </Container>
  );
}

export default ElectricPrice;
