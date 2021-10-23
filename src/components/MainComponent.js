import React, { Component } from 'react';
import { dishes } from '../shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes,
            selectedDish: null
        }
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Restaurant Fon Cusion</NavbarBrand>
                    </div>

                </Navbar>
                <Menu dishes={this.state.dishes}></Menu>
            </div>
        );
    }
}

export default App;
