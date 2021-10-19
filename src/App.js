import { Route, Switch } from 'react-router';
import './styles/App.css';
import Home from './components/Home';
import Gatos from './components/Gatos';
import Perros from './components/Perros';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Gatos" component={Gatos} />
        <Route exact path="/Perros" component={Perros} />
        <Route path="/Perros/:id1" component={Perros} />
      </Switch>
    </div>
  );
}

export default App;
