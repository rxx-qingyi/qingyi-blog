import './assets/less/App.less';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';

import Home from './pages/Home';
import Article from './pages/Article';
import AboutMe from './pages/AboutMe';
import Header from './components/Header/Header';

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='app'>
      <Header></Header>
      <Switch>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/article'>
          <Article></Article>
        </Route>
        <Route exact path='/aboutMe'>
          <AboutMe></AboutMe>
        </Route>
        <Redirect to='/home'></Redirect>
      </Switch>
    </div>
  );
};

export default App;
