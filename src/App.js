import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar.component';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
function App() {
  return (
    <div className="App">
      <Router>
        <InputTodo />
        <NavBar />
        <ListTodos />
      </Router>
      <h1>Hello World</h1>

    </div>
  );
}

export default App;
