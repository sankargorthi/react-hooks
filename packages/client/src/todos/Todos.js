import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';
import without from 'lodash/without';
import Items from './Items';

class Todos extends Component {
  state = {
    todos: []
  };

  getTodos = async () => {
    if (this.props.user && this.props.user !== -1) {
      const res = await fetch(`/todos/${this.props.user}`);
      const todos = await res.json();
      this.setState({ todos });
    }
  };

  del = async item => {
    await fetch(`/todos/${this.props.user}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        item
      })
    });
    this.setState(({ todos }) => ({ todos: without(todos, item) }));
  };

  shouldComponentUpdate({ user }, { todos }) {
    return this.props.user !== user || !isEqual(todos, this.state.todos);
  }

  componentDidMount() {
    this.getTodos();
  }

  componentDidUpdate() {
    this.getTodos();
  }

  render() {
    return <Items items={this.state.todos} del={this.del} />;
  }
}

export default Todos;
