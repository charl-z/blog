import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Footer from './common/footer'
import Categories from './page/categories'
import Home from './page/home'
import  Tags from './page/tags'
import Detail from './page/detail/'
import About from './page/about'
import store from './store'
// import { Globalstyle } from './style'
//
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div >
              {/* <Globalstyle/> */}
              <Header />
              <Route path='/' exact component={ Home }></Route>
              <Route path='/category'  exact component={ Categories }></Route>
              <Route path='/category/:id'  exact component={ Categories }></Route>
              <Route path='/tag' exact component={ Tags }></Route>
              <Route path='/tag/:id' exact component={ Tags }></Route>
              <Route  path='/article/:id'  exact component={ Detail }></Route>
              <Route  path='/about'  exact component={ About }></Route>
              <Footer />
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
