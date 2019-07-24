import React from 'react';
import './App.css';
import Header from './Header';
import Todos from './todos/Todos';

class App extends React.Component {
  state = {
    user: -1
  };

  setUser = user => this.setState({ user });

  render() {
    return (
      <section className="App">
        <h1>
          Stateful Apps with Hooks{' '}
          <span role="img" aria-label="hooked">
            🎣
          </span>
        </h1>
        <Header onChange={this.setUser} />
        {this.state.user && <Todos user={this.state.user} />}
      </section>
    );
  }
}

export default App;
