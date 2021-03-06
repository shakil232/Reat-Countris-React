

import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFount from './Components/NotFound/NotFount';
import FriendDetail from './Components/FriendDetails/FriendDetail';


function App() {


  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFount/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
