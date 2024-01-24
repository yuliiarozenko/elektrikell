
import { useState } from 'react';

const ChildComponent = () => {
    return (<div>Child component</div>);
}

function ParentComponent() {

    const [showChild, setShowChild] = useState(false);

    const toggleValue = () => {
        setShowChild(!showChild);
    }

    const Button = () => <button onClick={toggleValue}>Show/hide component</button>

    let componentToShow;

    if (showChild) {
        componentToShow = <ChildComponent />;
    } else {
        componentToShow = (<div>Elements of parent component</div>);
    }

    return (
        <div>
            <Button />
            {componentToShow}
        </div>
    );
}

export default ParentComponent;


