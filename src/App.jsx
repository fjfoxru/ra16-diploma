import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import LayoutHeader from './layout/parts/LayoutHeader/LayoutHeader';
import LayoutFooter from './layout/parts/LayoutFooter/LayoutFooter';

import ViewProduct from './views/ViewProduct';
import ViewIndex from './views/ViewIndex';
import ViewContacts from './views/ViewContacts';
import ViewCatalog from './views/ViewCatalog';
import ViewCart from './views/ViewCart';
import ViewAbout from './views/ViewAbout';
import View404 from './views/View404';

function App() {
  return (
    <div className="page">
      <LayoutHeader />
      <Router>
        <Switch>  
              <Route path="/catalog/:id([0-9]+)?:name([a-zA-Z]+)?" component={ViewProduct} />
              <Route path="/catalog" component={ViewCatalog} />
              <Route path="/contacts" component={ViewContacts} />
              <Route path="/about" component={ViewAbout} />
              <Route path="/cart" component={ViewCart} />
              <Route path="/" exact component={ViewIndex} />
              <Route path="*" component={View404} />
        </Switch>
      </Router>
      <LayoutFooter />
    </div>
  );
}

export default App;



// Как мне получать параметры? Селектором получать их в компоненте и оттуда посылать в экшен или в экшене объединять стор с пейлоадом
// апи дж : лучше предусмотреть все ситуации или делать на каждый независимый элемент функцию?
// как разбить на модули саги?