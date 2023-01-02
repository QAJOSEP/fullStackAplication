
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import employeeService from '../services/employee.service'
import { Link } from 'react-router-dom';

function EmployeesList() {

  const [employees, setEmployees] = useState([])


  const init = () => {
    employeeService.getAll()
      .then(response => {
        setEmployees(response.data);
      }) 
  }


  useEffect(() => {
    employeeService.getAll()
      .then(response =>{
        setEmployees(response.data)
      })    
  }, [])
  

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    employeeService.remove(id)
      .then(response => {
        init();
      })
  }

  return (
      <div className='container'>
      <h3>Empleados</h3>
      <Link to="/add" className="btn btn-primary mb-2">Añadir empleado</Link>
        <table className='table table-bordered table-hover'>
          <thead className='thead-dark'>
            <tr>

            <th >Nombre</th>
            <th >Ubicación</th>
            <th >Departamento</th>
            </tr>
          </thead>
          <tbody>
          
          {
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                <td>
                  <Link className='btn btn-info' to={`/employees/edit/${employee.id}`} >Actualizar</Link>

                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(employee.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    
  );
}

export default EmployeesList;
