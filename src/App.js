import logo from './logo.svg';
import './App.css';
import Nav from './Shared/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'

function App() {

  return (
    <div className="App">

      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>


      </Routes>

    </div>
  );
}

export default App;