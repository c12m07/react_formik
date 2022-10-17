import './App.css';
import { Route, Switch } from 'wouter';
import Home from './components/Home';
import Form from './components/form/index';
import Registered from './components/registered/index'

function App() {
  return (
    <div className='App'>
      <Switch>

        <Route path='/'>
          <Home />
        </Route>

        <Route path='/form'>
          <Form />
        </Route>

        <Route path='/registered'>
          <Registered />
        </Route>

        <Route>
          <div className='ErrorPage'>
            404 Not found
          </div> 
        </Route>

      </Switch>
    </div>
  );
}

export default App;
