import React, { Component } from 'react';
import { dishes } from '../shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes,
            selectedDish: null
        }
    }
    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Restaurant Fon Cusion</NavbarBrand>
                    </div>

                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></Menu>
                    <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>
            </div>
        );
    }
}

export default MainComponent;
