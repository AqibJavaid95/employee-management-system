import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route index element={<ListEmployeeComponent />} />
          <Route exact path="/" element={<ListEmployeeComponent />}></Route> 
          <Route path="/employees" element={<ListEmployeeComponent />}></Route> {/* shows all employees */}
          <Route path="*" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route> {/* configures route for adding an employee */}
          <Route path="/edit-employee/:id" element={AddEmployeeComponent}></Route> {/* route for updating/editing an employee which uses same component for adding an employee */}
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;