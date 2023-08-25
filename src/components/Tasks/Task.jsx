import React from 'react'
import { ReactComponent as DelTask } from '../../assets/img/delTask.svg'
import { ReactComponent as EditTask } from '../../assets/img/pencil.svg'
import { ReactComponent as Check } from '../../assets/img/check.svg'

const Task = ({ id, text, list, onRemove, onEdit, onComplete, completed }) => {

const onChangeCheckbox = e => {
  onComplete(list.id, id, e.target.checked);
}


	return (
		<div key={id} className='tasks__items-row'>
			<div className='checbox'>
				<input
					onChange={onChangeCheckbox}
					checked={completed}
					type='checkbox'
					name=''
					id={`task-${id}`}
				/>
				<label htmlFor={`task-${id}`}>
					<Check />
				</label>
			</div>
			<p>{text}</p>
			<div className='tasks__items-row-actions'>
				<div onClick={() => onEdit(list.id, { id, text })}>
					<EditTask />
				</div>
				<div onClick={() => onRemove(list.id, id)}>
					<DelTask />
				</div>
			</div>
		</div>
	)
}

export default Task
