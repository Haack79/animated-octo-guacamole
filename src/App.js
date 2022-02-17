import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar.component';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

      </Router>
      <h1>Hello World</h1>

    </div>
  );
}

export default App;
