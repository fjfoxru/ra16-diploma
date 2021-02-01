import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductRequest, addProductToCart } from '../actions/actionCreators';
import Banner from '../components/Banner';


export default function ViewProduct({ match }) {
    const { product, loading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedCount, setSelectedCount] = useState(1);

    useEffect(() => {
        dispatch(getProductRequest(match.params.id));
    }, [dispatch]);


    const addToCart = () => {
        dispatch(addProductToCart({data: product, size: selectedSize, count: selectedCount}));
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
        <main className="container">
        <div className="row">
            <div className="col">
                <Banner />

                <section className="catalog-item">
                    <h2 className="text-center">{product.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            {/* <img src={Array.from(product.images)[0]}
                                class="img-fluid" alt={product.title}/> */}
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
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
                            <div className="text-center">
                                <p>Размеры в наличии: 
                                    {product.sizes && product.sizes.map(size => <span onClick={() => onSelectSize(size.size)} key={size.size} className={ size.size === selectedSize ? 'catalog-item-size catalog-item-size_selected' : 'catalog-item-size'}>{size.size}</span> )}
                                </p>
                                <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        {selectedCount > 0 && <button className="btn btn-secondary" onClick={selectCountMinus}>-</button>}
                                        <span className="btn btn-outline-primary">{selectedCount}</span>
                                        <button className="btn btn-secondary" onClick={selectCountPlus}>+</button>
                                    </span>
                                </p>
                            </div>
                            {selectedSize && <button className="btn btn-danger btn-block btn-lg" onClick={addToCart}>В корзину</button>}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
    );
}