import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";

const AddEmployee = () => {
    const[name, setName] = useState('');
    const[location, setLocation] = useState('');
    const[department, setDepartment] = useState('');
    const {id} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();
        
        const employee = {name, location, department, id};
        if (id) {
            employeeService.update(employee)
                 
        } else {
            employeeService.create(employee)
        }
    }

    useEffect(() => {
        if (id) {
            employeeService.get(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Añadir empleado</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ingrese Nombre"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Ingrese Departamento"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Ingrese Ubicación"
                    />
                </div>
                <div >
                
                    
                    <button onClick={(e) => saveEmployee(e)} className="btn"><Link to="/">Guardar</Link></button>
                    
                </div>
            </form>
            <hr/>
            <Link to="/">Regresar a la lista</Link>
        </div>
    )
}

export default AddEmployee;