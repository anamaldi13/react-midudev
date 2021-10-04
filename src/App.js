import './App.sass';

import ListCards from './components/ListCards';
import { Route, Link } from "wouter";
import Home from './pages/Home/Home';
//Link viaja sin que se renderice todo el contenido.
function App() {

  return (
    <div className="App">
      <section className="app-content">
        <div class="app-cards">
        <Home/>
          <Route 
            component={ListCards}
            path="/:keyword"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
