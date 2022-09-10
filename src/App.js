import './App.css';
import { React, useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDo from './components/ToDo';
function App() {
  let [todos, setTodos] = useState([]);
  let [showTodo, setShowTodo] = useState("all")
  let [toggleAllComplete, setToggleAllComplete] = useState(true);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  // filter data to to equle id  todo need remove it
  const handleDelete = (id) => {

    setTodos(todos.filter((ele) => ele.id !== id));
  }
  // to set state completed
  const toggleComplete = (id) => {
    setTodos(todos.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          complete: !ele.complete
        }
      } else {
        return ele;
      }
    }))
  }

  // remove all complet todo
  const removeCompletTodo = () => {
    setTodos(todos.filter((ele) => !ele.complete))
  };

  // show data
  const handleShowTodo = (typeShow) => {
    setShowTodo(typeShow);
  };

  if (showTodo === "complete") {
    todos = todos.filter(ele => ele.complete)
  } else if (showTodo === 'active') {
    todos = todos.filter(ele => !ele.complete)
  };

  return (
    <div className="App">
      <ToDoForm onSubmit={addTodo} />
      {
        todos.map((ele) => {
          return (
            <div>
              <ToDo key={ele.id} todo={ele}
                handleDelete={() => { handleDelete(ele.id) }}
                toggleComplete={() => { toggleComplete(ele.id) }} />
            </div>
          );
        })
      }
      <div>
        <button onClick={() => { handleShowTodo("all") }}>All</button>
        <button onClick={() => { handleShowTodo("active") }}>Active</button>
        <button onClick={() => { handleShowTodo("complete") }}>complete</button>
      </div>


      <button onClick={() => { removeCompletTodo() }}>Remove all complete todos</button>
      <button onClick={() => {
        setTodos(todos.map(ele => {
          return {
            ...ele,
            complete: toggleAllComplete
          }
        })
        )
        setToggleAllComplete(!toggleAllComplete);
      }}>Toggle all complete : {`${!toggleAllComplete}`}</button>
    </div >
  );
}

export default App;
