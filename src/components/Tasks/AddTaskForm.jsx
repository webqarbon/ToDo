import React, { useState } from 'react'
import { ReactComponent as AddTask } from '../../assets/img/AddTask.svg'

const AddTaskForm = () => {
	const [visibleForm, setVisibleForm] = useState(false)

	const toggleFormVisible = () => {
		setVisibleForm(!visibleForm)
	}

	return (
		<div className='tasks__form'>
			{!visibleForm ? (
				<div onClick={toggleFormVisible} className='tasks__form-new'>
					<AddTask className='tasks__form-new-btn' />
					<span>Новая задача</span>
				</div>
			) : (
				<div className='tasks__form-block'>
					<input className='field' type='text' placeholder='Текст задачи' />
					<button className='button'>Добавить задачу</button>
					<button onClick={toggleFormVisible} className='button button--grey'>
						Отмена
					</button>
				</div>
			)}
		</div>
	)
}

export default AddTaskForm
