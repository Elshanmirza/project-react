import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Team from './components/Team';

function App() {
  return (
    <> {/* React fragment*/}
    <Navbar />
    <Home />
    <Aboutus />
    <Team />
    </>
  );
}

export default App;
