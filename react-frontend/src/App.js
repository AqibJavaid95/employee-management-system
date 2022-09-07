import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route index element={<ListEmployeeComponent />} />
          <Route exact path="/" element={<ListEmployeeComponent />}></Route> 
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route path="*" element={<ListEmployeeComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;