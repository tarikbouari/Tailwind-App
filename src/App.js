import './App.css';
import Analytic from './components/Analytics';
import Banner from './components/Banner';
import Navbar from './components/Nav'; 
import Band from './components/Band';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Band />
      <Analytic />
      <Newsletter />
     
    </div>
  );
}

export default App;
