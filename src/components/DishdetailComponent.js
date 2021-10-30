import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

function renderDish(dish) {
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

function renderComments(comments) {
    if (comments != null) return (
        <div className="container col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((dishComment) => {
                    return (
                        <li>
                            <div  >
                                <p>{
                                    dishComment.comment}
                                </p>
                                <p>{`--${dishComment.author}, ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dishComment.date)))}`}</p>
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
function DishDetail(props) {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.selectedDish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {renderDish(props.selectedDish)}
                {renderComments(props.comments)}
            </div>
        </div>
    );

}

export default DishDetail;