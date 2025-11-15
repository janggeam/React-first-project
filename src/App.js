import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="p-bold">제가 만들어보겠습니다.</p>
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
        <p className="p-color">전산전자공학부 학부 일정관리 </p>
      </header>
    </div>
  );
}

export default App;
