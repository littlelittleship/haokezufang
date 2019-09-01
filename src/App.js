
import React, { Component, Fragment } from 'react';

// 引入tab栏的四个组件
import Home from './pages/Home'
import List from './pages/List'
import News from './pages/News'
import Profile from './pages/Profile'
// 引入tab组件
import HKLayout from './components/HKLayout'

import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <section>
            <Route path="/" exact render={()=> <HKLayout><Home/></HKLayout>} />
            <Route path="/List" render={()=> <HKLayout><List/></HKLayout>} />
            <Route path="/News" render={()=> <HKLayout><News/></HKLayout>} />
            <Route path="/Profile" render={()=> <HKLayout><Profile/></HKLayout>} />
          </section>
        </Router>
      </Fragment>
    );
  }
}
export default App;