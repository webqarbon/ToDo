import React, { useState } from 'react'

import { ReactComponent as ListAddSvg } from '../../assets/img/list-add.svg'
import { ReactComponent as AddListSvg } from '../../assets/img/list-add-close.svg'
import List from '../List'
import Badge from '../Badge'
import './AddList.scss'

const AddList = ({ colors, onAdd }) => {
	const [visibleePopup, setVisibleePopup] = useState(false)
	const [selectedColor, selectColor] = useState(colors[0].id)
	const [inputValue, setInputValue] = useState('')


	const onClose = () =>{
		setVisibleePopup(false)
		setInputValue('')
		selectColor(colors[0].id)
	}


	const addList = () => {
		if (!inputValue) {
			alert('Введите название списка!')
			return
		}

		const color = colors.filter(c => c.id === selectedColor)[0].name;
		onAdd({
			id: Math.random(),
			name: inputValue,
			color,
		})
		onClose()
		
	}

	return (
		<div className='add-list'>
			<List
				onClick={() => setVisibleePopup(true)}
				items={[
					{
						className: 'list__add-button',
						icon: <ListAddSvg className='list__icon-add' />,
						name: 'Добавить список',
					},
				]}
			/>
			{visibleePopup && (
				<div className='add-list__popup'>
					<AddListSvg
						onClick={onClose}
						className='add-list__popup-close-btn'
					/>
					<input
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						className='field'
						type='text'
						placeholder='Название списка'
					/>
					<div className='add-list__popup-colors'>
						{colors.map(color => (
							<Badge
								onClick={() => selectColor(color.id)}
								key={color.id}
								color={color.name}
								className={selectedColor === color.id && 'active'}
							/>
						))}
					</div>
					<button onClick={addList} className='button'>
						Добавить
					</button>
				</div>
			)}
		</div>
	)
}

export default AddList
