import React from 'react';
import Main from '../containers/main';
import Home from '../containers/home';
import Gridwall from '../containers/gridwall';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
const App = () => (
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home} />
            <Route path="/shop" component={Gridwall} />
        </Route>
    </Router>
);

export default App;
