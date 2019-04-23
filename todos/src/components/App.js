import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from './AddTodo/AddTodoContainer'
import VisibleTodoList from './TodoList/TodoListContainer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
