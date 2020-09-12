import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() { //access to all of Reacts basic component
    super(undefined);
    this.state = {
      todos: [//one array
        {//one object inside the array
          task: 'learn what Date.now() does',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Make a plan for evacuating the city.',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }
  //methods created outside of the constructor
  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],//copy the todos array and add a new object to the end of it
      todo: '' //as well as clear the todo
    });
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
        <div>
          <TodoList
              handleToggleComplete={this.toggleTodoComplete}
              todos={this.state.todos}
          />
          <TodoForm
              value={this.state.todo}
              handleTodoChange={this.changeTodo}
              handleAddTodo={this.addTodo}
              handleClearTodos={this.clearCompletedTodos}
          />
        </div>
    );
  }
}

export default App;
