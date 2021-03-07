import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetail from './components/PostDetail';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/posts" component={PostsList}/>
          <Route path="/posts/:id" component={PostDetail}/>
          <Route path="/new" component={Form}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
