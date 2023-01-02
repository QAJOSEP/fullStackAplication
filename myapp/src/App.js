import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";



function App() {
  

  return (
      <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<EmployeesList/>} />
          <Route exact path="/add" element={<AddEmployee/>} />          
          <Route path="/employees/edit/:id" element={<AddEmployee/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

      </div>
      </BrowserRouter>
    
    
  );
}

export default App;
