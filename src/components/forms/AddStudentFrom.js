import React, { useState } from 'react'
import propTypes from 'prop-types'

const AddStudentFrom = ({addStudent}) => {
	const initialFormState = { id: null, name: '', address: '', dob:'', gender:'', class:'' }
	const [ student, setStudent ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setStudent({ ...student, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!student.name) return

				addStudent(student)
				setStudent(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={student.name} onChange={handleInputChange} />
			<label>Address</label>
			<input type="text" name="address" value={student.address} onChange={handleInputChange} />
			<label>Dob</label>
			<input type="date" name="dob" value={student.dob} onChange={handleInputChange} />
			<label>Gender</label>
			<select id="Gender" name="gender" onChange={handleInputChange} >
				<option disabled>Please select</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			<label>Class</label>
			<input type="text" name="class" value={student.class} onChange={handleInputChange} />
			<button className="btn btn-info">Add new Student</button>

			
		</form>
	)
}

AddStudentFrom.propTypes = {
	addStudent:propTypes.func.isRequired
}



export default AddStudentFrom
