import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulaire from './components/Formulaire';
import Navigation_bar from './components/Navigation_bar';
import Footer_page from './components/Footer_page';
import Section_left from './components/Section_left';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <Navigation_bar/>
      <div className="Section">
        <Section_left/>
        <Description/>
        <Formulaire/>
      </div>
      <Footer_page/>
    </div>
  );
}

export default App;
