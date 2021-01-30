import ContainerCatalog from '../containers/ContainerCatalog';
import ContainerTopSales from '../containers/ContainerTopSales';
import ContainerLoadMore from '../containers/ContainerLoadMore';

import Banner from '../components/Banner';

export default function ViewIndex() {
    return (
        <>
        <main className="container">
        <div className="row">
            <div className="col">
                <Banner />

                <section className="top-sales">
                    <h2 className="text-center">Хиты продаж!</h2>
                    <ContainerTopSales />

                   
                </section>
                <h2 className="text-center">Каталог!</h2>
                <ContainerCatalog />
                <ContainerLoadMore />

            </div>
        </div>
    </main>
    </>
    );
}