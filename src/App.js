import './App.css';
import Analytic from './components/Analytics';
import Banner from './components/Banner';
import Navbar from './components/Nav'; 
import Band from './components/Band';
import Newsletter from './components/Newsletter';
import Card from './components/Card';
import Review from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Band />
      <Analytic />
      <Card />
      <Review />
      <Newsletter />
     
    </div>
  );
}

export default App;
