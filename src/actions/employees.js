import { FETCH_EMPLOYEE, DELETE_EMPLOYEE, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, SEARCH_EMPLOYEE,SEED} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getallemployee = () => async (dispatch) => {
  try {
      const { data } = await api.getAllEmployee();
      
    dispatch({ type: FETCH_EMPLOYEE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const seedemployee = () => async (dispatch) => {
  try {
      const { data } = await api.seedEmployee();
      
    dispatch({ type: SEED, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createemployee = (formData) => async (dispatch) => {
  try {
      const { data } = await api.createEmployee(formData);
      
    dispatch({ type: CREATE_EMPLOYEE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteemployee = (formData) => async (dispatch) => {
  let id = formData.id;
  try {
      await api.deleteEmployee(id);
      
    dispatch({ type: DELETE_EMPLOYEE,  payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const searchemployee = (formData) => async (dispatch) => {

  const searchValues = formData;
  let searchGet='';
  if (searchValues.firstName !== '') {
    searchGet = searchGet + '&firstName=' + searchValues.firstName;
  }
  if (searchValues.lastName !== '') {
    searchGet = searchGet + '&lastName=' + searchValues.lastName;
  }
  if (searchValues.position !== '') {
    searchGet = searchGet + '&position=' + searchValues.position;
  }
  if (searchValues.remunerationFrom !== '') {
    searchGet = searchGet + '&remunerationFrom=' + searchValues.remunerationFrom;
  }
    if (searchValues.remunerationTo !== '') {
    searchGet = searchGet + '&remunerationTo=' + searchValues.remunerationTo;
  }


  try {
      const { data }=await api.searchEmployee(searchGet);
      
    dispatch({ type: SEARCH_EMPLOYEE,  payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updateemployee = (formData) => async (dispatch) => {
  try {
       await api.updateEmployee(formData);
       const { data } = await api.getAllEmployee();
    dispatch({ type: UPDATE_EMPLOYEE, payload: data });
  } catch (error) {
    console.log(error);
  }
};










