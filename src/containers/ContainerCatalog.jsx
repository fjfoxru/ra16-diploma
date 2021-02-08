import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsRequest } from '../redux/products/actions';
import CardProduct from '../components/cards/CardProduct';

export default function ContainerCatalog() {
    const { products, loading, error } = useSelector(state => state.products);
    const { requestParams } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
    }, [dispatch]);

    const handleRepeatRequest = (evt) => {
        evt.preventDefault();
        
        dispatch(getProductsRequest()); 
    }

    return (
        <div className="row">
            {loading && <div className="preloader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
            {error && <div><span>Ошибка...</span><button onClick={handleRepeatRequest}>Повторить запрос</button></div>}
            {products && products.map(product => <CardProduct key={product.id} item={product} />)}
        </div>
        
    )

}