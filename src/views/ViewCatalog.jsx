import ContainerCategories from '../containers/ContainerCategories';
import ContainerCatalog from '../containers/ContainerCatalog';
import ContainerLoadMore from '../containers/ContainerLoadMore';
import ContainerSearch from '../containers/ContainerSearch';

export default function ViewCatalog() {
    return (
        <main className="container">
        <div className="row">
            <div className="col">
                <div className="banner">
                    <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
                    <h2 className="banner-header">К весне готовы!</h2>
                </div>

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