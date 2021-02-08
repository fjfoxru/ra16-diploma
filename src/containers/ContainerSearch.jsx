import { useSelector, useDispatch } from 'react-redux';
import { changeGetProductsRequest } from '../redux/products/actions';

export default function ContainerSearch() {
    const dispatch = useDispatch();

    const handSearchChange = (evt) => {
        evt.preventDefault();
        dispatch(changeGetProductsRequest({q : evt.target.value })); 
    }

    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" onChange={handSearchChange} />
        </form>
        
    )

}