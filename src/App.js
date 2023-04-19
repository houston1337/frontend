import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Joystick from './components/Joystick/Joystick';

function App(props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element="Hello world" />
        <Route path="/scanning" element={<Joystick />} />
      </Routes>
    </>
  );
}

export default App;
