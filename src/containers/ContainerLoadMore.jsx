import { useSelector, useDispatch } from 'react-redux';
import { changeGetProductsRequest } from '../actions/actionCreators';

export default function ContainerCatalog() {
    const { requestParams, products } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleLoadMore = (evt) => {
        evt.preventDefault();
        console.log('s');
        dispatch(changeGetProductsRequest({offset: requestParams.offset + 6 })); 
    }

    return (
        <div className="text-center">
           {products.length > 5 && <button className="btn btn-outline-primary" onClick={handleLoadMore}>Загрузить ещё</button>}
        </div>
        
    )

}