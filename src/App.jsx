import "./App.css";

function App() {

  function updateInput() {
    // implement this function
  }

  function addTodo() {
   // implement this function
  }

  function deleteTodo(index) {
    // implement this function
  }
  return (
    <>
      <input type="text" onChange={updateInput} />
      <button onClick={addTodo}>Add</button>
      <ul>
       {/* render each todo as a list item in this format */}
       <li>
          <button onClick={() => deleteTodo()}>Delete</button>
          </li>
      </ul>
    </>
  );
}

export default App;
