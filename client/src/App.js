//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from "./component/Adduser";
import Allusers from "./component/Allusers";
import Codeforinterview from "./component/Codeforinterview";
import EditUser from "./component/EditUser";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Codeforinterview />}></Route>
          <Route path="/alluser" element={<Allusers />}></Route>
          <Route path='/adduser' element={<Adduser />}></Route>
          <Route path='/edituser/:id' element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
