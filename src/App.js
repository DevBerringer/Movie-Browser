import './App.css';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Search from './Pages/Search';
import { Switch, Route } from "react-router-dom";
import { Container } from '@material-ui/core';


function App() {
  return (
    <>
    <Header />
      <div className="app bg-dark text-light ">
      <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
    <BottomNav />
    </>
  );
}

export default App;
