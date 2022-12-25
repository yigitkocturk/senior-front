
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';



function App() {
  return (
    <div className="App">
           <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/users/:userId' element={<User/>}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
