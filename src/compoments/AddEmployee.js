import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createemployee} from './../actions/employees';

const AddEmployee = ({ valueOfAddModal, showAddModal }) => {
    const dispatch = useDispatch();
      const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        position: '',
        remuneration: '',
    });

            const handleChange = (evt) => {
                const value = evt.target.value;
                const regRemunation = /^[0-9\b]+$/;
                const regRest = /^[a-zA-Z \b]+$/;
                if ((evt.target.value === '' || regRemunation.test(evt.target.value)) && (evt.target.name === 'remuneration') &&(value <=1000000)) {
                    setFormData({ ...formData, [evt.target.name]: value, });
                 
                }else if ((evt.target.value === '' || regRemunation.test(evt.target.value)) && (evt.target.name === 'remuneration') &&(value >=1000000)) {
                    setFormData({ ...formData, [evt.target.name]: 1000000, });
                 
                }else if ((evt.target.value === '' || regRest.test(evt.target.value)) && (evt.target.name === 'firstName' || evt.target.name === 'lastName' || evt.target.name === 'position')) {
                    setFormData({ ...formData, [evt.target.name]: value, });
                }
               
            }

       return (valueOfAddModal) ? (
        <div className="popup-add">
            <div className="add-inner">
                <div className="title">Add Employee</div>
                   <div className="description">
                       <form>
                        <div className="form-group row">
                            <label htmlFor="firstNameLabel" className="col-sm-6 col-form-label">First Name</label>
                            <div className="col-sm-6 mt-2">
                                <input type="text" className="form-control" id="firstNameLabel" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </div>
                           </div>
                        <div className="form-group row">
                            <label htmlFor="lastNameLabel" className="col-sm-6 col-form-label">Last Name</label>
                            <div className="col-sm-6  mt-2">
                                                <input type="text" className="form-control" id="lastNameLabel" name="lastName"  value={formData.lastName} onChange={handleChange} />
                            </div>
                           </div>
                        <div className="form-group row">
                            <label htmlFor="positionLabel" className="col-sm-6 col-form-label">Position </label>
                            <div className="col-sm-6 mt-2">
                                                <input type="text" className="form-control" id="positionLabel"   name="position" value={formData.position} onChange={handleChange} />
                            </div>
                           </div>
                        <div className="form-group row">
                            <label htmlFor="reumenerationLabel" className="col-sm-6 col-form-label">Remuneration</label>
                            <div className="col-sm-6 mt-2">
                                <input type="text" className="form-control" id="reumenerationLabel"   name="remuneration"  value={formData.remuneration} onChange={handleChange} />
                            </div>
                        </div>
                        </form>       
                </div>
                <div className="submitButtonBox">
                       <button className="btn btn-secondary buttons-margin" onClick={() => {
                              setFormData({
                                firstName: '',
                                lastName: '',
                                position: '',
                                remuneration: '',
                           });
                    showAddModal();
                       }}>Back</button>
                       <button className="btn btn-secondary buttons-margin" onClick={() => {
                           dispatch(createemployee(formData));
                           setFormData({
                                firstName: '',
                                lastName: '',
                                position: '',
                                remuneration: '',
                           });
                    showAddModal();
                       }}>Save</button>
                </div>
            </div>
        </div>
    ): ("");
}

export default AddEmployee
