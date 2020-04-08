import React, { useState, useEffect } from 'react'

const EditStudentForm = props => {
  const [ studentData, setStudentData ] = useState(props.currentStudent)

  useEffect(
    () => {
      setStudentData(props.currentStudent)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setStudentData({ ...studentData, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(studentData.id, studentData)
      }}
    >
    <label>Name</label>
			<input type="text" name="name" value={studentData.name} onChange={handleInputChange} />
			<label>Address</label>
			<input type="text" name="address" value={studentData.address} onChange={handleInputChange} />
			<label>Dob</label>
			<input type="date" name="dob" value={studentData.dob} onChange={handleInputChange} />
			<select id="Gender" value={studentData.gender} name="gender" onChange={handleInputChange} >
    <option disabled selected >Please select</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
			<label>Class</label>
			<input type="text" name="class" value={studentData.class} onChange={handleInputChange} />
      <button className="btn btn-info btn-sm">Update Student</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info btn-sm">
        Cancel
      </button>
    </form>
  )
}

export default EditStudentForm
