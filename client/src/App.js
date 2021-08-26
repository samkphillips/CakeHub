import { Route, Switch } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SubmitRecipes from './pages/SubmitRecipes'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/submitrecipes" component={SubmitRecipes} />
        </Switch>
      </main>
    </div>
  )
}

export default App
