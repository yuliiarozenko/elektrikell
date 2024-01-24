// import React from "react";

import { useState } from 'react';

// function Test(props) {
//     const tittle = 'Test component';
//     return (
//         <div>
//             <div>{tittle}</div>
//             <div>First name: {props.firstName}</div>
//             <div>Last name: {props.lastName}</div>
//             <div>Age: {props.age}</div>
//             <Counter />
//         </div>
//     );
// };


function Test({ firstName = 'Yuliia', lastName = 'Rozenko', age = 34, children }) {
    const [newAge, setNewAge] = useState(age);

    const title = 'Test component';
    
    const ButtonAdd = () => <button onClick={() => setNewAge(newAge + 1)}>+</button>;
    const ButtonMinus = () => <button onClick={() => setNewAge(newAge - 1)}>-</button>;

    return (
        <div>
            <div>{title}</div>
            <div>First name: {firstName}</div>
            <div>Last name: {lastName}</div>
            <div>Age: {age}</div>
            <div>New age: 
                <ButtonMinus />
                    {newAge} 
                <ButtonAdd />
            </div>
            {children}
        </div>
    );
};


// Test.defaultProps = {
//     firstName: "Yuliia",
//     lastName: "Rozenko",
//     age: 34,
// };

// const Test = () => (<div>Test component</div>);

// const Test = () => {
//     return (<div>Test component</div>);
// }

// class Test extends React.Component {
//     render() {
//         return (<div>Test component</div>);
//     }
// }

export default Test;




