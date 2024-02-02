import { useState } from "react";
import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from './Body';
import Footer from './Footer';
import Head from './Head';
import { DEFAULT_ACTIVE_BUTTON } from './Head/constants';
import LeftSideBar from "./LeftSideBar";
import { getDefaultFrom, getDefaultUntil } from "./utlis/dates";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(1);
  const [showSideBar, setShowSideBar] = useState (false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());

  const handleCloseSideBar = () => setShowSideBar(false);
  const handleOpenSideBar = () => setShowSideBar(true);

   
  return (
    <Container>
      <Head 
      activePrice={activePrice} 
      setActivePrice={setActivePrice}
      handleOpenSideBar={handleOpenSideBar} 
      />
      <Body activeHour={activeHour} from={from} until={until} />
      <Footer 
      activePrice={activePrice}
      activeHour={activeHour} 
      setActiveHour={setActiveHour} 
      />
      <LeftSideBar 
      show={showSideBar} 
      handleClose={handleCloseSideBar}
      from={from} 
      until={until}
      setFrom={setFrom}
      setUntil={setUntil}/>
      </Container>
  );
}

export default App
