import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home.js'
import Search from './pages/search/Search.js'
import Create from './pages/create/Create.js'
import Recipe from './pages/recipe/Recipe.js'
import Navbar from './components/Navbar.js'
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Navbar />
       <ThemeSelector/>
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/create">
          <Create />
        </Route>

        <Route path="/recipes/:id">
          <Recipe />
        </Route>    

         <Route path="/search">
          <Search />
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
