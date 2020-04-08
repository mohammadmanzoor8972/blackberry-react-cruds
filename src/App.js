import React, { useState, Fragment, useEffect } from "react";
import AddStudentFrom from "./components/forms/AddStudentFrom";
import EditStudentForm from "./components/forms/EditStudentForm";
import StudentTable from "./components/tables/StudentTable";
import SearchInput from "./components/search/SeachInput";
import sortBy from "./helpers/sortBy";
import defaultStudentsData from "./data/student";

  // Data

  const initialFormState = {
    id: null,
    name: "",
    address: "",
    dob: "",
    gender: "",
    class: ""
  };


const App = () => {

  // Setting state
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState([]);
  const [currentStudent, setcurrentStudent] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    //can api call or action call
    setStudents(defaultStudentsData);
    return () => {
      
    }
  }, [])

  // CRUD operations
  const addStudentHandler = student => {
    student.id = students.length + 1;
    setStudents([...students, student]);
    setFilter([]);
  };

  const deleteStudentHandler = id => {
    setEditing(false);
    setStudents(students.filter(user => user.id !== id));
    setFilter([]);
  };

  const updateStudentHandler = (id, updatedStudent) => {
    setEditing(false);
    setStudents(students.map(student => (student.id === id ? updatedStudent : student)));
    setFilter([]);
  };

  const editRowHandler = student => {
    setEditing(true);
    setcurrentStudent({
      id: student.id,
      name: student.name,
      address: student.address,
      dob: student.dob,
      gender: student.gender,
      class: student.class
    });
    setFilter([]);
  };

  const filterUserHandler = searchText => {
    const filter = students.filter(student => student.name.indexOf(searchText) !== -1);
    setFilter(filter);
  };

  const sortByHandler = key =>{
    let data =  sortBy(students, key)
    setStudents([...data]);
   }

  return (
    <div className="">
      <h3>Blackberry Student Form</h3>
      <div className="row">
        <div className="col-sm-3 border w-25 p-3">
          {editing ? (
            <Fragment>
              <h2>Edit Student</h2>
              <EditStudentForm
                editing={editing}
                setEditing={setEditing}
                currentStudent={currentStudent}
                updateUser={updateStudentHandler}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h4>Add Student</h4>
              <AddStudentFrom addStudent={addStudentHandler} />
            </Fragment>
          )}
        </div>
        
        <div className="col-sm-9 border border-primary">
          <h4>View Students</h4>
          <SearchInput filterUser={filterUserHandler} />
          <StudentTable
            studensList={filter.length > 0 ? filter : students}
            editRow={editRowHandler}
            deleteUser={deleteStudentHandler}
            sortBy={sortByHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

