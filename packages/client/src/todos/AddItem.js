import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    name: ''
  };

  setName = ({ target: { value: name } }) => this.setState({ name });
  clearName = () => this.setState({ name: '' });

  render() {
    const submit = e => {
      e.preventDefault();
      if (this.state.name) {
        this.props.add(this.state.name);
        this.clearName();
      }
    };

    return (
      <form onSubmit={submit}>
        <button type="submit" disabled={!this.state.name}>+</button>
        <input
          placeholder="Broccoli 🥦"
          value={this.state.name}
          onChange={this.setName}
        />
        {this.state.name && <button onClick={this.clearName}>x</button>}
      </form>
    );
  }
}

export default AddItem;
