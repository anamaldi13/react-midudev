import './App.sass';

import ListCards from './components/ListCards';

import Home from './pages/Home/Home';

import Context from './context/StaticContext';
import { ObjectContext } from './context/ObjectContext';

import { Route, Link } from "wouter";
import Detail from './pages/Detail/Detail';
//Link viaja sin que se renderice todo el contenido.

function App() {

  return (

    /* Todo lo que este envuelto entre el Context podrá usar el objeto contexto*/
    <Context.Provider value={{ name: 'midudev', suscribeteAlCanal: true }}>
      <div className="App">
        <section className="app-content">
          <div class="app-cards">
            <ObjectContext>
              <Home />
              <Route
                component={ListCards}
                path="/:keyword"
              />
              <Route
                component={Detail}
                path="/detail/:id" />
            </ObjectContext>
          </div>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
