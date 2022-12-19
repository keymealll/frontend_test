import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterOutlet from './Outlet/RegisterOutlet';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RegisterDetails from './Pages/RegisterDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/Register'} element={<RegisterOutlet />} >
          <Route path={'/Register/1'} element={<Register />} />
          <Route path={'/Register'} element={<RegisterDetails />} />
        </Route>
        <Route path={'/Dashboard'} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
