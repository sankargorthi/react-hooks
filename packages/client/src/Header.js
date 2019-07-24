import React, {Component} from 'react';

class Header extends Component {
    state = {
        users: [],
        selected: -1,
    }

    getUsers = async () => {
        const res = await fetch('/users');
        const users = await res.json();
        this.setState({
            users,
            selected: users[0].id
        });
        this.props.onChange(users[0].id);
    }

    selectUser = ({ target : { value: selected }}) => {
        this.setState({ selected })
        this.props.onChange(selected);
    }
    
    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <select id="users" onChange={this.selectUser} value={this.state.selected}>
                {this.state.users.map(({ id, name }) => (
                    <option key={id} value={id}>{name}</option>
                ))}
            </select>
        )
    }
}

Header.defaultProps = {
    onChange: () => {}
}
export default Header;