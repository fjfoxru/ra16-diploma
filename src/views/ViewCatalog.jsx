import ContainerCategories from '../containers/ContainerCategories';
import ContainerCatalog from '../containers/ContainerCatalog';
import ContainerLoadMore from '../containers/ContainerLoadMore';
import ContainerSearch from '../containers/ContainerSearch';

import Banner from '../components/Banner';

export default function ViewCatalog() {
    return (
        <main className="container">
        <div className="row">
            <div className="col">
                <Banner />

                <section className="catalog">
                    <h2 className="text-center">Каталог</h2>
                    <ContainerSearch />
                    <ContainerCategories />
                    <ContainerCatalog />
                    <ContainerLoadMore />
                </section>

            </div>
        </div>
    </main>
    );
}