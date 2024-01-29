import { useState } from 'react';
import Logo from './Logo';
import SideBar from './SideBar';
import Info from './Info';
import Row from 'react-bootstrap/Row';

function Head(props) {
    const [showSideBar, setShowSideBar] = useState(false);

    return ( 
    <>
        <Row>
            <Logo setShowSideBar = {setShowSideBar} />
            <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} />
        </Row>
        <Row>
            <Info {...props} />
        </Row>
    </>
    );
}

export default Head;
