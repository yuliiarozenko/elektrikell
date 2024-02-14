import { useEffect } from "react";
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
import ElectricPriceProvider from "./contexts/ElectricPriceContext";

function ElectricPrice() {
  console.log('test')
  const params = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.main.isLoading);

  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);

  return (
    <ElectricPriceProvider>
    <Container>
      <Head />
      <Body />
      <Footer />
      <LeftSideBar />
      <ErrorModal />
      {isLoading && <h1>Loading...</h1>}
    </Container>
    </ElectricPriceProvider>
  );
}

export default ElectricPrice;
