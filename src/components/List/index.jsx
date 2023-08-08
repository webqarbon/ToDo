import React from "react";

import './List.scss'


const List = ({ items}) =>{
  return (
		<ul className='list'>
			{items.map(item => (
				<li className='active'>
					<i>{item.icon}</i>
					<span>{item.name}</span>
				</li>
			))}
		</ul>
	)
};

export default List;