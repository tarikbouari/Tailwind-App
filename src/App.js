import './App.css';
import Analytic from './components/Analytics';
import Banner from './components/Banner';
import Navbar from './components/Nav'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Analytic />
    </div>
  );
}

export default App;
