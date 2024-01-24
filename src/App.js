import logo from './logo.svg';
import './App.css';
// import Test from './Test';
import ParentComponent from './hw';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ParentComponent />
 
        {/* <Test firstName="Peeter" lastName="Ots" age={34}>
          <div>Children element</div>
        </Test> */}
      </header>
    </div>
  );
}

export default App;
