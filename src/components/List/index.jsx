import React from 'react'
import classNames from 'classnames'
import axios from 'axios'
import { ReactComponent as RemoveSvg } from '../../assets/img/remove.svg'
import Badge from '../Badge'

import './List.scss'

const List = ({ items, isRemovable, onClick, onRemove, onClickItem }) => {
	const removeList = item => {
		if (window.confirm('Вы действительно хотите удалить?')) {
			axios.delete('http://localhost:3001/lists/' + item.id).then(()=>{
			onRemove(item.id)
			})
			
		}
	}
	return (
		<ul onClick={onClick} className='list'>
			{items.map((item, index) => (
				<li
					key={index}
					className={classNames(item.className, { active: item.active })}
					onClick={onClickItem ? () => onClickItem(item) : null}
				>
					<i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
					<span>
						{item.name}
						{item.tasks && ` (${item.tasks.length})`}
					</span>
					{isRemovable && (
						<RemoveSvg
							onClick={() => removeList(item)}
							className='list__remove-icon'
						/>
					)}
				</li>
			))}
		</ul>
	)
}

export default List
