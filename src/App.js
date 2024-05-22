import Navbar from './chameleon-components/navbar';
import Banner from './chameleon-components/banner'
import About from './chameleon-components/about'
import Font from './chameleon-components/font';

function App() {
  return (
    <div className="App">
      <Font/>
      <Navbar/>
      <Banner/>
      <About/>
    </div>
  );
}

export default App;
