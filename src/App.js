import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
        console.log(event.target.value);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return(
                robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            );
        })
        return (
            <Fragment>
                <header>
                    Robofriends
                </header>
                <nav>
                    <SearchBox searchChange={this.onSearchChange} />
                </nav>
                <main>
                    <CardList robots={filteredRobots} />
                </main>
            </Fragment>
        );
    }
}

export default App;