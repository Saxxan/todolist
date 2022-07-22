import './App.css';
import Aside from './components/aside/Aside';
import Background from './components/background/Background';
import MainContainer from './components/mainContainer/MainContainer';

function App() {
  return (
    <div className="App">
     <Background/>
     <Aside/>
     <MainContainer/>
    </div>
  );
}

export default App;
