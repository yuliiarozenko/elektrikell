import { Routes, Route } from 'react-router-dom';
import ElectricPrice from './ElectricPrice';
import About from './About';
import Navigations from './Navigation';

function App() {

    return (
        <>
            <Navigations />
            <Routes>
                <Route path='/' element={<ElectricPrice />}>
                    <Route path='lowprice/:hours' element={<ElectricPrice />} />
                </Route>
                <Route path='/about' element={<About />}>
                    <Route path=':who' element={<About />} />
                </Route>
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </>
    );
}


export default App;

