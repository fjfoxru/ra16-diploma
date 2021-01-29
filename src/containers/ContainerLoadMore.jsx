import { useSelector, useDispatch } from 'react-redux';
import { changeGetProductsRequest } from '../actions/actionCreators';

export default function ContainerCatalog() {
    const { requestParams, products } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleLoadMore = (evt) => {
        evt.preventDefault();
        dispatch(changeGetProductsRequest({offset: requestParams.offset + 6 })); 
    }

    return (
        <div class="text-center">
           {products.length > 5 && <button class="btn btn-outline-primary" onClick={handleLoadMore}>Загрузить ещё</button>}
        </div>
        
    )

}