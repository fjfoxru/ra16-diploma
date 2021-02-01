import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { sendOrder } from '../api/index';

export default function ViewCart() {
    const { products } = useSelector(state => state.cart);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const totalPrice = (products) => {
        if (!products.length) return 0;
        let sum = products.reduce(function(a, b) {
            return a.data.price * a.count + b.data.price * b.count;
          });
        return sum;
    }
    const totalSum = totalPrice(products);


    const onSubmitOrder = (evt) => {
        evt.preventDefault();
        const order = {
            owner: {
                phone: phone,
                address: address,
            },
            items: 
                [...products.map(el => {
                    let item = {};
                    item.id = el.data.id;
                    item.price = el.data.price;
                    item.count = el.count;
                    return item;
                })]
        }
        sendOrder(order);
    }

    return (
        <main className="container">
        <div className="row">
            <div className="col">
                <Banner />

                <section className="cart">
                    <h2 className="text-center">Корзина</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Название</th>
                                <th scope="col">Размер</th>
                                <th scope="col">Кол-во</th>
                                <th scope="col">Стоимость</th>
                                <th scope="col">Итого</th>
                                <th scope="col">Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => <tr key={product.data.id + product.size}>
                                <th scope="row">1</th>
                                <td><Link to={`/catalog/${product.data.id}`}>{product.data.title}</Link></td>
                                <td>{product.size}</td>
                                <td>{product.count}</td>
                                <td>{product.data.price}</td>
                                <td>{product.data.price * product.count}</td>
                                <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
                            </tr>)}


                            
                            <tr>
                                <td colSpan="5" className="text-right">Общая стоимость</td>
                                <td>{totalSum}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="order">
                    <h2 className="text-center">Оформить заказ</h2>
                    <div className="card">
                    {/* <div className="card" style="max-width: 30rem; margin: 0 auto;">    */}
                        {products.length && <form className="card-body" onSubmit={onSubmitOrder}>
                            <div className="form-group">
                                <label htmlFor="phone">Телефон</label>
                                <input className="form-control" id="phone" placeholder="Ваш телефон" onChange={(evt) => setPhone(evt.target.value)} value={phone} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Адрес доставки</label>
                                <input className="form-control" id="address" placeholder="Адрес доставки" onChange={(evt) => setAddress(evt.target.value)} value={address}/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="agreement"/>
                                <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                        </form>}

                    </div>
                </section>
            </div>
        </div>
    </main>
    );
}