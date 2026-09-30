import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Laga mat", done: false },
    { id: 2, text: "Dammsuga lägenheten", done: true },
    { id: 3, text: "Koda", done: false },
    { id: 4, text: "Dricka energidryck", done: false },
    { id: 5, text: "Spela wow", done: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // Fixed: actually invoke preventDefault()
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodos = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <main className="app">
      <h2>Todo App</h2>
      <form className="input-row" onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />{" "}
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className={t.done ? "todo completed" : "todo"}>
            <span onClick={() => toggleTodos(t.id)}>{t.text}</span>
            <button onClick={() => deleteTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
