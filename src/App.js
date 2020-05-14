import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
        console.log(event.target.value);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            );
        })
        if (this.state.robots.length === 0) {
            return <h1 className='title'>Loading</h1>
        } else {
            return (
                <Fragment>
                    <header className='tc'>
                        <h1 className='f1 title'>Robofriends</h1>
                    </header>
                    <nav className='tc'>
                        <SearchBox searchChange={this.onSearchChange} />
                    </nav>
                    <main>
                        <p><CardList robots={filteredRobots} /></p>
                    </main>
                </Fragment>
            );
        }
    }
}

export default App;