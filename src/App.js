import About from './chameleon-components/about'
import Banner from './chameleon-components/banner'
import Camps from './chameleon-components/camps'
import Font from './chameleon-components/font';
import Navbar from './chameleon-components/navbar';

function App() {
  return (
    <div className="App">
      <Font/>
      <Navbar/>
      <Banner/>
      <About/>
      <Camps/>
    </div>
  );
}

export default App;
