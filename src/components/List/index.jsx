import React from 'react'
import classNames from 'classnames'
import { ReactComponent as RemoveSvg } from '../../assets/img/remove.svg'
import Badge from '../Badge'

import './List.scss'

const List = ({ items, isRemovable, onClick, onRemove }) => {

const removeList = (item) => {
	if(window.confirm('Вы действительно хотите удалить?')){
		onRemove(item);
	}
};
	return (
		<ul onClick={onClick} className='list'>
			{items.map((item, index) => (
				<li
					key={index}
					className={classNames(item.className, { active: item.active })}
				>
					<i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
					<span>{item.name}</span>
					{isRemovable && (
						<RemoveSvg onClick={()=>removeList(item)} className='list__remove-icon' />
					)}
				</li>
			))}
		</ul>
	)
}

export default List
