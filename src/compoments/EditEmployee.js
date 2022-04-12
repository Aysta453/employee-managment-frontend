import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateemployee } from '../actions/employees';

const EditEmployee = ({ valueOfEditModal, showingEditModal, data,setEditData }) => {
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position,
        remuneration: data.remuneration,
    });

    const handleChange = (evt) => {
        const value = evt.target.value;
        const regRemunation = /^[0-9\b]+$/;
        const regRest = /^[a-zA-Z \b]+$/;

        if ((evt.target.value === '' || regRemunation.test(evt.target.value)) && (evt.target.name === 'remuneration') &&(value <=99999)) {
           setEmployee({...employee, [evt.target.name]: value,});
        }else if ((evt.target.value === '' || regRest.test(evt.target.value)) && (evt.target.name === 'firstName' || evt.target.name === 'lastName' || evt.target.name === 'position') ) {
            setEmployee({...employee, [evt.target.name]: value,}); 
        } else if ((evt.target.value === '' || regRemunation.test(evt.target.value)) && (evt.target.name === 'remuneration') && (value >= 99999)) {
             setEmployee({...employee, [evt.target.name]: 99999,}); 
        }
        
    }
        useEffect(() => {
            setEmployee({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position,
        remuneration: data.remuneration,
    });
    }, [data, valueOfEditModal]);
       return (valueOfEditModal) ? (
        <div className="popup-add">
            <div className="add-inner">
                <div className="title">
                    Edit Employee
                </div>
                   <div className="description">
                 <form>
                        <div className="form-group row">
                            <label htmlFor="firstNameLabel" className="col-sm-6 col-form-label">First Name</label>
                            <div className="col-sm-6 mt-2">
                                <input type="text" className="form-control" id="firstNameLabel" name="firstName" value={employee.firstName || "" } onChange={handleChange} />
                        </div>
                           </div>
                        <div className="form-group row">
                            <label htmlFor="lastNameLabel" className="col-sm-6 col-form-label">Last Name</label>
                            <div className="col-sm-6  mt-2">
                                                <input type="text" className="form-control" id="lastNameLabel" name="lastName"  value={ employee.lastName || "" } onChange={handleChange} />
                            </div>
                           </div>
                        <div className="form-group row">
                            <label htmlFor="positionLabel" className="col-sm-6 col-form-label">Position </label>
                            <div className="col-sm-6 mt-2">
                                                <input type="text" className="form-control" id="positionLabel"   name="position" value= { employee.position || "" } onChange={handleChange} />
                            </div>
                           </div>
                        <div className="form-group row">
                            <label htmlFor="reumenerationLabel" className="col-sm-6 col-form-label">Remuneration</label>
                            <div className="col-sm-6 mt-2">
                                <input type="text" className="form-control" id="reumenerationLabel"   name="remuneration"   value={ employee.remuneration || "" } onChange={handleChange} />
                            </div>
                        </div>
                    </form>       
                </div>
                <div className="submitButtonBox">
                    
                    <button className="btn btn-secondary buttons-margin" onClick={() => {
                           showingEditModal();
                            setEditData('');
                       }}>Back</button>
                   
                         <button className="btn btn-primary buttons-margin" onClick={() => {
                           dispatch(updateemployee(employee));
                           setEditData('');
                           showingEditModal();
                         }}>Save</button>
                      
                </div>
            </div>
        </div>
    ): ("");
}

export default EditEmployee
