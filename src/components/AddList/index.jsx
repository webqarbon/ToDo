import React, { useState } from 'react'

import { ReactComponent as ListAddSvg } from '../../assets/img/list-add.svg'
import { ReactComponent as AddListSvg } from '../../assets/img/list-add-close.svg'
import List from '../List'
import Badge from '../Badge'
import './AddList.scss'

const AddList = ({ colors }) => {
	const [visibleePopup, setVisibleePopup] = useState(false)
	const [selectedColor, selectColor] = useState(colors[0].id)

	console.log(selectedColor)

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
						onClick={() => setVisibleePopup(false)}
						className='add-list__popup-close-btn'
					/>
					<input className='field' type='text' placeholder='Название списка' />
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
					<button className='button'>Добавить</button>
				</div>
			)}
		</div>
	)
}

export default AddList
