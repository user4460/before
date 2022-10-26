import React from 'react
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './style/GlobalStyle'
import 'react-hot-loader'

import { Provider } from "react-redux";
import store from "./stores/index";

const app = document.getElementById('app')
// page
import Top from './views/pages/top/Top'
import { TagList } from './views/pages/TagList'
// components
import Header from './views/components/block/Header'

// react-router-domでページ遷移
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Top} />
        <Route path="/list/white" exact component={TagList} />
        <Route path="/list/blue" exact component={TagList} />
        <Route path="/list/green" exact component={TagList} />
        <Route path="/list/red" exact component={TagList} />
        <Route path="/list/yellow" exact component={TagList} />
      </Switch>
    </Router>
  </Provider>,
  app
);

if (module.hot)
{
  module.hot.accept()
}
