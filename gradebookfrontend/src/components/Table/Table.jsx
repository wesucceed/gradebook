import React, { useState } from 'react'
import './table.css'
import Entry from './Entry'

const Table = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	const sub_headings = ['STUDENT NAME', 'EXERCISE ASSIGNMENT', 'SUB TOTAL 40',
		'CLASS TEST', 'SUB TOTAL 40', 'HOME WORK', 'SUB TOTAL 20', 'TOTAL CLASS SCORE 100',
		'30%', 'TERM EXAM', '70%', 'OVER ALL TOTAL 30% + 70%', 'AVERAGE SCORE', 'GRADE']
	const position = ['P', '0', 'S', 'I', 'T', 'I', 'O', 'N']

	const student_data = [
		{ id: 1, name: "Ambrose Blay", exercise_score: 40, test_score: 40, homework_score: 40, exam_score: 40 }
	]

	const [formData, setFormData] = useState({
		name: '',
		exercise_score: '',
		test_score: '',
		homework_score: '',
		exam_score: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Create a JavaScript object to store the form data
		const student = {
			name: formData.name,
			exercise_score: formData.exercise_score,
			test_score: formData.test_score,
			homework_score: formData.homework_score,
			exam_score: formData.exam_score
		};


		// Perform any other actions with the jsObject as needed
		student_data.push(student)
		console.log('student data is', student_data)
	};

	const [showForm, setShowForm] = useState(false)

	const handleShow = (value) => {
		setShowForm(value)
	}

	const handleClear = () => {

		document.getElementById('name').value = '';
		document.getElementById('exercise_score').value = '';
		document.getElementById('test_score').value = '';
		setShowForm(false)
	}

	return (
		<div>
			<button className='button' onClick={() => handleShow(true)}>Add Entry</button>
			<div className={showForm === true ? "form_modal show_form" : "form_modal"}>

				<div >
					<form action="/" method='post' className='form_container' onSubmit={handleSubmit}>
						<div className="close">
							<button onClick={() => handleShow(!showForm)}>Close</button>
						</div>
						<div className='form_field'>
							<label htmlFor="name">Student Name</label>
							<input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter Student Name' />
						</div>
						<div className='form_field'>
							<label htmlFor="exercise_score">Exercise Assignment</label>
							<input type="text" id='exercise_score' name='exercise_score' value={formData.exercise_score} onChange={handleChange} placeholder='Enter Score' />
						</div>
						<div className='form_field'>
							<label htmlFor="test_score">Class Test</label>
							<input type="text" id='test_score' name="test_score" value={formData.test_score} onChange={handleChange} placeholder='Enter Score' />
						</div>
						<div className='form_field'>
							<label htmlFor="homework_score">Home Work</label>
							<input type="text" id='homework_score' name='homework_score' value={formData.homework_score} onChange={handleChange} placeholder='Enter Score' />
						</div>
						<div className='form_field'>
							<label htmlFor="exam_score">Term Exam</label>
							<input type="text" id='exam_score' name="exam_score" value={formData.exam_score} onChange={handleChange} placeholder='Enter Score' />
						</div>
						<button className='form_button' onClick={() => handleClear()}>Add Entry</button>
					</form>
				</div>
			</div>

			<section className="table-container">
				<table className="table">
					<thead className="table-heading">
						<tr>
							<th colSpan={15} className='class-info'>
								<div className='class-info__container'>
									<div className='class-data'>
										<span>Subject.....................</span>
										<span>Class.........................</span>
										<span>Teacher.....................</span>
									</div>
									<div className="class-data">
										<span>Year.....................</span>
										<span>Term....................</span>
										<span>No. on roll............</span>
									</div>
								</div>

							</th>
						</tr>
						<tr className="numbers">
							{numbers.map((number) => {
								return (<td key = {number.toString()} className={`number number-${number}`}>
									<span>{number}</span>
								</td>
								)
							})}
						</tr>
						<tr className="sub_headings">
							{sub_headings.map(sub_heading => {
								return (
									<td className='td-container'>
										<div className="sub_heading">
											<span>{sub_heading}</span>
										</div>
									</td>
								)
							})}
							<td className="td-container">
								{position.map((letter, i) => {
									return (
										<div key = {letter + i.toString()} className='sub_heading position'>
											<span>{letter}</span>
										</div>
									)
								})}
							</td>
						</tr>
						{student_data.map(({ id, name, exercise_score, test_score, homework_score, exam_score }) => {
							return <Entry key = {id.toString()} props={{ name: name, exercise_score: exercise_score, test_score: test_score, homework_score: homework_score, exam_score: exam_score }} />
						})}
					</thead>
				</table>
			</section>
		</div>

	)
}

export default Table