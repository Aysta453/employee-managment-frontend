/* eslint-disable import/no-anonymous-default-export */
import { FETCH_EMPLOYEE,DELETE_EMPLOYEE, CREATE_EMPLOYEE,UPDATE_EMPLOYEE,SEARCH_EMPLOYEE,SEED} from '../constants/actionTypes';

export default (employees = [], action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return action.payload;
    case SEARCH_EMPLOYEE:
      return action.payload;
   case DELETE_EMPLOYEE:
      return employees.filter((employee) => employee.id !== action.payload);
      case CREATE_EMPLOYEE:
      return [...employees, action.payload];
    case UPDATE_EMPLOYEE:
      return action.payload;
        case SEED:
      return employees;
    default:
      return employees;
  }
};
