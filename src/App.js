import logo from './logo.svg';
import './App.scss';
import Header from './reactWebsite/header';
import About from './reactWebsite/about';
import Shop from './reactWebsite/shop';
import Menu from './reactWebsite/menu';
import Clients from './reactWebsite/clients';
import Prices from './reactWebsite/prices';

function App() {
  return (
    <div>
     <Header/>
     <About/>
     <Shop/>
     <Menu/>
     <Clients/>
     <Prices/>
    </div>
  );
}

export default App;
