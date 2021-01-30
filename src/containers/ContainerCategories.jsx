import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesRequest, changeGetProductsRequest } from '../actions/actionCreators';


export default function ContainerCategories() {
    const { categories, loading, error } = useSelector(state => state.categories);
    const { requestParams } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesRequest());
    }, []);

    const handleRepeatRequest = (evt) => {
        evt.preventDefault();
        dispatch(getCategoriesRequest()); 
    }

    const onSelectCategory = (id) => {
        dispatch(changeGetProductsRequest({'categoryId': id, offset: 0 }));
    }

    return (
        <>
        {loading && <div className="preloader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
        {error && <div><span>Ошибка...</span><button onClick={handleRepeatRequest}>Повторить запрос</button></div>}
        <ul className="catalog-categories nav justify-content-center">
            {categories && categories.map(category => <li key={category.title}><a onClick={() => onSelectCategory(category.id)} className="nav-link" href="#">{category.title}</a></li>)}
        </ul>
        </>
    )
}