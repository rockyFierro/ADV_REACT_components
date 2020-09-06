import React from 'react';
import TodoList from './components/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      data: [
        {
          task: '',
          id: Date.now(),
          completed: false
        },
        {
          task:'build a todo array',
          id: Date.now(),
          completed: false
        }
      ]
    }
  };


  handleChange = e => {
    console.log('arf:src:app:handleChange:', e)
  };

  handleSubmit = e => {
    console.log('arf:src:app:handleSubmit:', e)
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.data}/>
      </div>
    );
  }
}

export default App;
