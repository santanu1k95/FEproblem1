import './App.scss';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <div className="sections">
        <Navbar/>
        <Search/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
