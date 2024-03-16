import './App.css';
import { Carousel } from './components/Carousel';
import { Categories } from './components/Categories';
import {Header} from "./components/Header"
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Carousel />    
      <Categories />
      <Footer />
      </header>
    </div>
  );
}

export default App;
