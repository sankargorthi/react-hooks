import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    users: []
  }

  getUsers = async () => {
    const res = await fetch('/users');
    const users = await res.json();
    this.setState({users});
  }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
    <section className="App">
      <ul>
        {this.state.users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </section>
  );
  }
}

export default App;
