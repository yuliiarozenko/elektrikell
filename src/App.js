import { useState } from "react";
import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from './Body';
import Footer from './Footer';
import Head from './Head';
import { DEFAULT_ACTIVE_BUTTONS } from "./Head/constants";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTONS);
  
  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice} />
      <Body />
      <Footer />
    </Container>
  );
}

export default App
