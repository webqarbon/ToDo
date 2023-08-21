import React from 'react'
import axios from 'axios'

import { ReactComponent as EditSvg } from '../../assets/img/pencil.svg'
import AddTaskForm from './AddTaskForm'

import './Tasks.scss'


const Tasks = ({ list, onEditTitle, onAddTask }) => {
	const editTitle = () => {
		const newTitle = window.prompt('Название списка', list.name)
		if (newTitle) {
			onEditTitle(list.id, newTitle)
			axios
				.patch('http://localhost:3001/lists/' + list.id, {
					name: newTitle,
				})
				.catch(() => {
					alert('Не удалось обновить название списка')
				})
		}
	}

	return (
		<div className='tasks'>
			<h2 className='tasks__title'>
				{list.name}
				<EditSvg onClick={editTitle} className='tasks__title-edit-btn' />
			</h2>

			<div className='tasks__items'>
				{!list.tasks.length && <h2>Задачи отсутствуют</h2>}
				{list.tasks.map(task => (
					<div key={task.id} className='tasks__items-row'>
						<div className='checbox'>
							<input type='checkbox' name='' id={`task-${task.id}`} />
							<label htmlFor={`task-${task.id}`}>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14.3 7.20001L8.79999 12.7L6.29999 10.2'
										stroke='#000'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</label>
						</div>
						<input readOnly value={task.text} />
					</div>
				))}
			</div>
			<AddTaskForm list={list} onAddTask={onAddTask} />
		</div>
	)
}

export default Tasks
