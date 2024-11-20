import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1", "Todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["Todo1ed", "Todo2ed"])
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const onClickAdd = () => {
    const newIncompleteTodos = [...incompleteTodos, todo];
    setIncompleteTodos(newIncompleteTodos);
    setTodo("");
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  const onClickRemove = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1)
    setIncompleteTodos(newIncompleteTodos);
  }
  const onClickRevert = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);


  }
  return (
    <>
      <div className="input-area">
        <input type="text" value={todo} onChange={handleChange}></input>
        <button onClick={onClickAdd}>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incomplete tasks</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-items">{todo}</p>
                <button onClick={() => onClickComplete(index)}>Complete</button>
                <button onClick={() => onClickRemove(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Complete tasks</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-items">{todo}</p>
                <button onClick={() => {onClickRevert(index)}}>Revert</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
