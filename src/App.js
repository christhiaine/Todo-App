import './App.css';
import React from 'react';
import TodoItem from './TodoItem'
import todosData from "./todosData"

// export default function App(){

//   const todosComponent = todosData.map( todo => <TodoItem key = {todo.id} text = {todo.text} completed = {todo.completed} /> )

//   return(
//     <div className="todo-list">
//       {todosComponent}
//     </div>
//   ); 
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  

  handleChange(id) {
    this.setState( prevState => {
      const updatedTodos = prevState.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
    console.log(this.state.todos)
    console.log(id)
  }

  render(){
    const todosComponent = this.state.todos.map( todo => <TodoItem key = {todo.id} item = {todo} 
       handleChange = {this.handleChange} />)

    return(
      <div className = "todo-list">
        {todosComponent}
      </div>
    )
  }
}

export default App

