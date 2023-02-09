import './App.css';
import Home from './componants/Home/home';
import Sidbar from './componants/sidbar/sidbar';
import Topbar from './componants/Topbar/Topbar';

function App() {
  return (
    <div className="App">
    <Topbar/>
      <div className='container'>
        
        <Sidbar/>
        <div className='other'>
        <Home/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
