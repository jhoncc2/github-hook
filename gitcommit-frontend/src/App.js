import logo from './logo.svg';
import './App.css';
import CommitList from './components/commitList';
import {mockCommitList} from './utils/mock';

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
      </header>
      <div className="App-body">
        <CommitList commitList= {mockCommitList}/>
      </div>
    </div>
  );
}

export default App;
