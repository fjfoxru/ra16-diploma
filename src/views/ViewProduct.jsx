import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductRequest, addProductToCart } from '../actions/actionCreators';

export default function ViewProduct({ match }) {
    const { product, loading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedCount, setSelectedCount] = useState(1);

    useEffect(() => {
        dispatch(getProductRequest(match.params.id));
    }, [dispatch]);


    const addToCart = () => {
        dispatch(addProductToCart({id: product.id, size: selectedSize, count: selectedCount}));
    }

    const onSelectSize = (size) => {
        setSelectedSize(size);
    }

    const selectCountPlus = () => {
        setSelectedCount(state => state+1);
    }

    const selectCountMinus = () => {
        setSelectedCount(state => state-1);
    }



    return (
        <main class="container">
        <div class="row">
            <div class="col">
                <div class="banner">
                    <img src="/img/banner.jpg" class="img-fluid" alt="К весне готовы!"/>
                    <h2 class="banner-header">К весне готовы!</h2>
                </div>

                <section class="catalog-item">
                    <h2 class="text-center">{product.title}</h2>
                    <div class="row">
                        <div class="col-5">
                            {/* <img src={Array.from(product.images)[0]}
                                class="img-fluid" alt={product.title}/> */}
                        </div>
                        <div class="col-7">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{product.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{product.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{product.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{product.material}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{product.season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{product.reason}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-center">
                                <p>Размеры в наличии: 
                                    {product.sizes && product.sizes.map(size => <span onClick={() => onSelectSize(size.size)} key={size.size} class={ size.size === selectedSize ? 'catalog-item-size catalog-item-size_selected' : 'catalog-item-size'}>{size.size}</span> )}
                                </p>
                                <p>Количество: <span class="btn-group btn-group-sm pl-2">
                                        <button class="btn btn-secondary" onClick={selectCountMinus}>-</button>
                                        <span class="btn btn-outline-primary">{selectedCount}</span>
                                        <button class="btn btn-secondary" onClick={selectCountPlus}>+</button>
                                    </span>
                                </p>
                            </div>
                            {selectedSize && <button class="btn btn-danger btn-block btn-lg" onClick={addToCart}>В корзину</button>}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
    );
}