import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home   from './pages/Home';

import './App.css';

function App() {
  return (
    <>
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
    </>
  )
}

export default App
