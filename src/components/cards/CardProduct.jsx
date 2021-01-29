import { Link } from 'react-router-dom';

export default function CardProduct(props) {
    return (
        <div className="col-4">
        <div className="card catalog-item-card">
            <img src={props.item.images[0]}
                className="card-img-top img-fluid" alt={props.item.title}/>
            <div className="card-body">
                <p className="card-text">{props.item.title}</p>
                <p className="card-text">{props.item.price}</p>
                <Link to={`/catalog/${props.item.id}`} href="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
            </div>
        </div>
        </div>
    );
}