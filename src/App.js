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
          id: 16268624127,
          completed: false
        },
        {
          task: 'Make a plan for evacuating the city.',
          id: 19716661230,
          completed: false
        }
      ],
      todo: ''
    };
  }
  //handler functions
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
//add functionality to toggle your todo component flag from false to true
  toggleComplete = id => {
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
//add functionality to clear todos with .filter
  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
        <div>
          <TodoList
              handleToggleComplete={this.toggleComplete}
              todos={this.state.todos}
          />
          {//*form will hold input field, and buttons*//}
          <TodoForm
              value={this.state.todo}
              handleTodoChange={this.changeTodo}
              handleAddTodo={this.addTodo}
              handleClearTodos={this.clearCompleted}
          />
        </div>
    );
  }
}

export default App;
