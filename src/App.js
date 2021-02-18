import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoItem from './TodoItem'


export default function App(){
  return(
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  ); 
}
