import './App.css';
import Homepage from './pages/Homepage';
import Linkpage from './pages/Linkpage';
import Completion from './pages/Completion';
import {HashRouter, Route,Routes } from 'react-router-dom';
import Thankyou from './pages/Thankyou';

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