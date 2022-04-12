/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {searchemployee,seedemployee } from './../actions/employees';

const initValues = {
    firstName: '',
    lastName: '',
    position: '',
    remunerationTo: '',
    remunerationFrom:'',
       
};
const Navbar = () => {
    const refreshPage=() =>{
    window.location.reload(false);
  }
    const dispatch = useDispatch();
    const [state, setState] = useState(initValues);
    const handleChange = (evt) => {
        const value = evt.target.value;
        const regRemunation = /^[0-9a-zA-Z \b]+$/;
        const regTest = /^[0-9\b]+$/;
        if ((evt.target.value === '' || regRemunation.test(evt.target.value)) && (evt.target.name==='firstName' || evt.target.name==='lastName'|| evt.target.name==='position' )) {
           setState({...state, [evt.target.name]: value,});
        }
        if ( (evt.target.value === '' || regTest.test(evt.target.value)) &&(evt.target.name === 'remunerationTo' || evt.target.name === 'remunerationFrom')&&(value <=1000000)) {
             setState({...state, [evt.target.name]: value,});
        }
        if ( (evt.target.value === '' || regTest.test(evt.target.value)) &&(evt.target.name === 'remunerationTo' || evt.target.name === 'remunerationFrom')&&(value >=1000000)) {
             setState({...state, [evt.target.name]: 1000000,});
         } 

    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000/">Employee</a>
                 <button className="btn btn-outline-success my-2 my-sm-0" href="http://localhost:3000/" type="button" onClick={() => {
                            dispatch(seedemployee());
                    refreshPage();
                         }}>DbSeed</button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="First Name" name="firstName" value={state.firstName} onChange={handleChange} aria-label="Search"/>
                    <input className="form-control mr-sm-2" type="search" placeholder="Last Name" name="lastName" value={state.lastName} onChange={handleChange} aria-label="Search"/>
                    <input className="form-control mr-sm-2" type="search" placeholder="Position" name="position" value={state.position} onChange={handleChange} aria-label="Search" />

                    <input className="form-control mr-sm-0" type="search" name="remunerationFrom" placeholder="Rem From" value={state.remunerationFrom} onChange={handleChange} aria-label="Search"/>    
                    <input className="form-control mr-sm-0" type="search" name="remunerationTo" placeholder="Rem To" value={state.remunerationTo} onChange={handleChange} aria-label="Search"/>    
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => {
                            dispatch(searchemployee(state));
                            setState(initValues);
                         }}>Search</button>
                </form>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
