import './App.css';
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Footer from './components/Footer/Footer';
import Collaborate from './components/pages/Collaborate/Collaborate';
import About from './components/pages/About/About';
import CleanBrand from './components/pages/CleanBrand/CleanBrand';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/collaborate' component={Collaborate} />
        <Route path='/about' component={About} />
        <Route path="/clean_brand" component={CleanBrand} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
