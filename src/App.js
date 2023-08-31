import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './viewPage';
import Home from './Add';
import Edit from './Edit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/viewdata' element={<View/>}/>
         <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
