import React, { useState } from 'react'
import Pagination from '../pagination/Pagination';
import PropTypes from 'prop-types';

const StudentTable = ({studensList, sortBy, editRow, deleteUser}) => {

  const [pageOfItems, setPageOfItems] = useState([])

  const onChangePage =(pageOfItems)=>{
    setPageOfItems(pageOfItems);
}

  return(
  <React.Fragment>
  <table >
    <thead>
      <tr onClick={(ev)=>{
        let sortKey = ev.target.innerText.trim();
        if(sortKey !== "Actions" && sortKey.length>0){
          sortBy(sortKey);
        }
      }} style={{cursor:'pointer'}}>
        <th>Name <i className="fa fa-sort" aria-hidden="true"></i></th>
        <th>Address <i className="fa fa-sort" aria-hidden="true"></i></th>
        <th>Dob <i className="fa fa-sort" aria-hidden="true"></i></th>
        <th>Gender <i className="fa fa-sort" aria-hidden="true"></i></th>
        <th>Class <i className="fa fa-sort" aria-hidden="true"></i></th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {pageOfItems.length > 0 ? (
        pageOfItems.map(user => (
          <tr key={user.id+"_"+user.name}>
            <td  style={{padding:'5px'}}>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.dob}</td>
            <td>{user.gender}</td>
            <td>{user.class}</td>
            <td>
            <i className="fa fa-pencil" aria-hidden="true" style={{cursor:'pointer'}}  onClick={() => {
                  editRow(user)
                }}></i>

              &nbsp;
              <i className="fa fa-trash" aria-hidden="true" onClick={() => deleteUser(user.id)} style={{cursor:'pointer'}}></i>

            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Students</td>
        </tr>
      )}
    </tbody>
  </table>
  <Pagination items={studensList} onChangePage={onChangePage} initialPage={1}/>
  </React.Fragment>
)}

StudentTable.propTypes={
  studensList:PropTypes.array.isRequired, 
  sortBy: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default StudentTable

