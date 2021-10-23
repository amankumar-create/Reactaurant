import { Component } from "react/cjs/react.production.min";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
    renderComment(dishComment) {
        return (
            <p>{dishComment.comment}</p>
        );
    }
    renderComments(dish) {
        if (dish != null) return (
            <div className="container col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {dish.comments.map((dishComment) => {
                        return (
                            <li>
                                <div  >
                                    <p>{
                                        dishComment.comment}
                                    </p>
                                    <p>{`--${dishComment.author}, ${dishComment.date}`}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>);
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish)}
            </div>
        );
    };
}
export default DishDetail;