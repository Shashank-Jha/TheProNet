import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import LargeGraph from './components/LargeGraph/LargeGraph';
import InputBox from './components/InputData/InputBox';
import Landing from './components/Landing';
import CustomGraph from './components/CustomGraph/CustomGraph';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/AnalyzeNetwork" element={<InputBox />} />
          <Route path="/LargeNetwork" element={<LargeGraph />} />
          <Route path="/CustomGraph" element={<CustomGraph />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
