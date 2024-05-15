// src/App.jsx

const App = () => {
  const todo = { text: 'A brand new task', done: false };
  const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: true},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2>Conditional Rendering</h2>
      <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text}</p>

      <h2>Looping with JSX</h2>
      <ul>
        {todos.map((todo, index) =>
          <li>
            {todo.done ? }
          </li>
        )}
      </ul>
    </>
  )
}

export default App
