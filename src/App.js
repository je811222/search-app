import logo from './logo.svg';
import './App.css';
import MainPage from './components/pages/main-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br></br>
      <MainPage className="Main-page"></MainPage>
    </div>
  );
}

export default App;
