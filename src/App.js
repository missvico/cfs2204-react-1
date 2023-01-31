import './App.css';
import Counter from "./views/Counter"
import ToDoList from "./views/ToDoList"


function App() {
  return (
    <div className="App">
      <header>
        <h1>Primera Clase de React</h1>
      </header>
      <body>
        {/* <Counter/> */}
        <ToDoList/>
      </body>
    </div>
  );
}

export default App;
