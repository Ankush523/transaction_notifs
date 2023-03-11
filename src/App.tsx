import './App.css';
import Homepage from './components/Homepage';
import Linkpage from './components/Linkpage';
import Completion from './components/Completion';
import {HashRouter, BrowserRouter,Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Thankyou from './components/Thankyou';

function App() {
  return (
    <div className="App text-white1">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/linkpage" element={<Linkpage/>} />
          <Route path="/completion" element={<Completion/>} />
          <Route path="/thankyou" element={<Thankyou/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;