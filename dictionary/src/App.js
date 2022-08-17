import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary defaultKeyWord="Party"/>
        </header>
      </div>
      <footer className="footer text-center">
        <a href="https://github.com/Dianab177/REACT-Dictionary-APP.git" title="link to github" rel="noreferrer"><small>Made by Diana Borrajo</small></a>
      </footer>
    </div>
  );
}

export default App;
