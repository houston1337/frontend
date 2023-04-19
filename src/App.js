import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Canvas from "./components/Canvas/Canvas";
import Joystick from "./components/Joystick/Joystick";

const App = (props) => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={"Hello world"}/>
                <Route path="/scanning" element={<Joystick/>} />
            </Routes>
        </div>
    );
}

export default App;
