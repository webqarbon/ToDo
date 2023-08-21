import React, { useState } from 'react'
import axios from 'axios'
import { ReactComponent as AddTaskbtn } from '../../assets/img/AddTask.svg'

const AddTaskForm = ({ list, onAddTask }) => {
	const [visibleForm, setVisibleForm] = useState(false)
	const [inputValue, setInputValue] = useState(null)
	const [isLoading, setIsLoading] = useState('')

	const toggleFormVisible = () => {
		setVisibleForm(!visibleForm)
		setInputValue('')
	}

	const addTask = () => {
		const obj = {
			listId: list.id,
			text: inputValue,
			completed: false,
		}
		setIsLoading(true)
		axios
			.post('http://localhost:3001/tasks', obj)
			.then(({ data }) => {
				onAddTask(list.id, data)
				toggleFormVisible()
			})
      .catch(() => {
        alert('Ошибка при добавлении задачи!')
      })
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<div className='tasks__form'>
			{!visibleForm ? (
				<div onClick={toggleFormVisible} className='tasks__form-new'>
					<AddTaskbtn className='tasks__form-new-btn' />
					<span>Новая задача</span>
				</div>
			) : (
				<div className='tasks__form-block'>
					<input
						value={inputValue}
						className='field'
						type='text'
						placeholder='Текст задачи'
						onChange={e => setInputValue(e.target.value)}
					/>
					<button disabled={isLoading} onClick={addTask} className='button'>
						{isLoading ? "Добавление..." : "Добавить задачу"}
					</button>
					<button onClick={toggleFormVisible} className='button button--grey'>
						Отмена
					</button>
				</div>
			)}
		</div>
	)
}

export default AddTaskForm
