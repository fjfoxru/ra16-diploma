import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopSalesRequest } from '../redux/topSales/actions';
import CardProduct from '../components/cards/CardProduct';

export default function ContainerTopSales() {
    const { products, loading, error } = useSelector(state => state.topsales);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopSalesRequest());
    }, [dispatch]);

    const handleRepeatRequest = (evt) => {
        evt.preventDefault();
        
        dispatch(getTopSalesRequest()); 
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