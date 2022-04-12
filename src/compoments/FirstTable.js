/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import AddEmployee from './AddEmployee';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import EditEmployee from './EditEmployee';
import {deleteemployee } from './../actions/employees';

const FirstTable = () => {
    const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);
  const [editData, setEditData] = useState('');
  

    const [showEditModal, setShowEditModal] = useState(false);
    const showingEditModal = () => {
        setShowEditModal(!showEditModal);
    }
    const sorter = (a, b) => (isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b);


   const columns = [
  {
    title: 'First Name',
       dataIndex: 'firstName',
      key: 'firstName',
     sorter: (a, b) => sorter(a.firstName, b.firstName),

  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
     key: 'lastName',
     sorter: (a, b) => sorter(a.lastName, b.lastName),

  },
  {
    title: 'Position',
    dataIndex: 'position',
     key: 'position',
     sorter: (a, b) => sorter(a.position, b.position),
  },
  {
    title: 'Remuneration',
    dataIndex: 'remuneration',
    key: 'remuneration',
    sorter: {
      compare: (a, b) => a.remuneration - b.remuneration,
      multiple: 1,
    },
  },
     {
       title: 'Action',
       dataIndex: 'operations',
       render: (_,employee) => (
     
      <Space size="middle">
        <button className="btn btn-primary" onClick={() => {setEditData(employee); showingEditModal(); }}>Edit Employee </button>
        <button className="btn btn-secondary" onClick={() => {
                    dispatch(deleteemployee({ id: employee.id }));
                }}>Delete Employee </button>
      </Space>
    ),
  },
  ];

  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

    const [addEmployeeModal, setAddEmployeeModal] = useState(false);

    const showAddModal = () => {
        setAddEmployeeModal(!addEmployeeModal);
    }

    


    return (
      <>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 order-md-1 text-center text-md-left">
                    <h1 className="text-center">Employees</h1>
                    <div>
                      <button  className="btn btn-primary"  onClick={() => {showAddModal();}}>Add Employee</button>
                      <Table dataSource={employees} columns={columns} onChange={onChange} />
              </div>
                   <EditEmployee data={editData} setEditData={setEditData} valueOfEditModal={showEditModal} showingEditModal={showingEditModal}/>
                  <AddEmployee valueOfAddModal={addEmployeeModal} showAddModal={showAddModal} />
              </div>
            </div>
        </div>
      </>
    )
}

export default FirstTable;
