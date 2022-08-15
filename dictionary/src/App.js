import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div>Holas</div>
          <a href="/" className="btn btn-primary" rel="noopener noreferrer">
            Chau
          </a>
          <Dictionary/>
        </header>
      </div>
      <footer className="footer text-center">Made by Diana Borrajo</footer>
    </div>
  );
}

export default App;
