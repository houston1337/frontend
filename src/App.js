import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Scanning from "./components/Scanning/Scanning";

function App(props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element="Hello world" />
        <Route path="/scanning" element={<Scanning />} />
      </Routes>
    </>
  );
}

export default App;
