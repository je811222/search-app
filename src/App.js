import { useState, useEffect } from 'react';
import logo from './logo.svg';
import MainPage from './components/pages/main-page';
import './App.css';

function App() {
  const [width, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize",updateDimensions);
  }, []);

  const screen = {
    'small': width < 560
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br></br>
      <MainPage smallScreen={screen.small} className="Main-page"></MainPage>
    </div>
  );
}

export default App;
