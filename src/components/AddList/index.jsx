import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ReactComponent as ListAddSvg } from '../../assets/img/list-add.svg'
import { ReactComponent as AddListSvg } from '../../assets/img/list-add-close.svg'
import List from '../List'
import Badge from '../Badge'
import './AddList.scss'

const AddList = ({ colors, onAdd }) => {
	const [visibleePopup, setVisibleePopup] = useState(false)
	const [selectedColor, selectColor] = useState(3)
	const [isLoading, setIsLoading] = useState(false)
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		if (Array.isArray(colors)) {
			selectColor(colors[0].id)
		}
	}, [colors])

	const onClose = () => {
		setVisibleePopup(false)
		setInputValue('')
		selectColor(colors[0].id)
	}

	const addList = () => {
		if (!inputValue) {
			alert('Введите название списка!')
			return
		}
		setIsLoading(true)
		axios
			.post('http://localhost:3001/lists', {
				name: inputValue,
				colorId: selectedColor,
			})
			.then(({ data }) => {
				const color = colors.filter(c => c.id === selectedColor)[0].name
				const listObj = { ...data, color, tasks: []}
				onAdd(listObj)
				onClose()
			})
			.catch(() => {
				alert('Ошибка при добавлении списка!')
			})
			.finally(() => {
				setIsLoading(false)
			})
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
					<AddListSvg onClick={onClose} className='add-list__popup-close-btn' />
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
						{isLoading ? 'Добавление...' : 'Добавить'}
					</button>
				</div>
			)}
		</div>
	)
}

export default AddList
