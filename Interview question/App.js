import Create from './compo/Create';
import Home from './compo/Home';
import Read from './compo/Read';
import Update from './compo/Update';
import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="container mt-2">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create'element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>

      </Routes>
    </div>
  );
}

export default App;
