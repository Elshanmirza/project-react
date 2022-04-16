import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <> {/* React fragment*/}
    <Navbar />
    <Home />
    <Aboutus />
    </>
  );
}

export default App;
